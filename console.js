const repl = require("repl");
const models = require("./models");

Object.keys(models).forEach(modelName => {
  global[modelName] = models[modelName];
});

let replServer = repl.start({
  prompt: '> '
});

replServer.context.db = models;
