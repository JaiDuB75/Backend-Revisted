const express = require("express");
const app = express();

// Route functions
const sayHello = (req, res, next) => {
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};

const sayGoodbye = (req, res, next) => {
  res.send("Sorry to see you go!");
};

const saySomething = (req, res, next) => {
  const greeting = req.params.greeting;
  const name = req.query.name;
  const age = req.query.age;

  const content = greeting && name && age ? `${greeting}, ${name}! You are ${age}` : `${greeting}!`;
  res.send(content);
};

// Routes
app.get("/hello", sayHello);
app.get("/say/goodbye", sayGoodbye);
app.get("/say/:greeting", saySomething);
app.get("/say/:greeting/:age", saySomething); // http://localhost:5000/say/greeting?name=Jay&age=26

module.exports = app;