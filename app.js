require('dotenv').config();

const express = require('express');
const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const redis = require('redis');
const redisClient = redis.createClient();
const redisStore = require('connect-redis')(session);

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

require('./middlewares/auth');

const app = express();
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const server = new ApolloServer({
	schema,
	context: ({req, res}) => ({
		currentUser: req.user,
	}),
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

redisClient.on('error', err => console.log('Redis error: ', err));
app.use(session({
  secret: process.env.SECRET_KEY,
  name: process.env.SESSION_NAME,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new redisStore({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, client: redisClient, ttl: 86400 }),
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  res.json({ message: 'ok' });
});

server.applyMiddleware({ app });

module.exports = app;
