require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const LocalStrategy = require('passport-local').Strategy;
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const schema = makeExecutableSchema({ typeDefs, resolvers });

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

passport.use(new LocalStrategy(
  {
    usernameField: 'login',
    passwordField: 'password',
    session: false
  },
  function (login, password, done) {
  }
));

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(
  '/graphql',
  graphqlExpress(request => {
    return {
      schema,
      context: { request },
    };
  })
);

const env = process.env.NODE_ENV || 'production';
if (env === 'development') {
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql-test'
    })
  );
}

module.exports = app;
