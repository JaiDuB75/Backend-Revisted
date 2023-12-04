const express = require("express");
const app = express();

const sayHello = (req, res, next) => {
    res.send("Hello! Jay");
  };

const logging = (req, res, next) => {
console.log("A request is being made!");
next();
};

app.get("/hello", sayHello);
app.get("/logging", logging); 

module.exports = app;