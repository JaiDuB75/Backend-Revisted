## What is Express? 

Express is a minimalist web framework for Node.js. Web frameworks are tools and software that makes building applications for the web easier. 

## Commands To Know

Using npm

`npm init -y` - Initializes the project with a package.json 
`npm install express@4` - Install the lastes form of express 4

## Folders and Files and Their Uses

src - a folder that will hold most of the code for the server. This includes app.js and server.js

- app.js: used to configure the express application
- server.js: contains the code for running the Express application

## Creating the Express Application

The following code initializes an Express application.
This code should be used in the app.js file. 

```js 
const express = reqiure("express"); // You require the Express package and assign it to a variable 
const app = express(); 

/*
The express package exports a function. When you invoke that function, you get a new Express application and assign it to a variable. 
*/

module.exports = app; // Export the Express appliaction to be used in the server.js file
```

## Using the server file

The following code will allow your server to "listen" on the specified port

```js
const {PORT = 5000} = process.env; // Using destructuring, set the variable PORT to be equal to whatever values is found inside of process.env or default to 5000
const app = require("./app"); // You require the Express application from app.js

const listener = () => console.log(`Listening on Port ${PORT}!`); // This will run when the server successfully starts. 
app.listen(PORT, listener); 
/*
The listen() method on your Express application is what runs the server. It takes two arguments: a port number and a function. The PORT variable defines where your server is running, and the listener() function will get called as soon as the server has successfully started.
*/
```

## Starting the Server


Create a script to make this process a bit easier. Inside the package.json file, add this code to the scripts: 

```json
"scripts": {
  "start": "node src/server.js"
},
```

Adding the script above allows you to use `npm start` in the terminal instead of using `node ./src/server.js`