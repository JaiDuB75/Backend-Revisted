## What is Middleware? 

In this context, middleware will refer to a function that an Express server runs between receiving a request and responding to that request. 

In Express, middleware is represented through functions. 

## Developing Middleware

General Syntax: 

```js
const middlewareName = (req, res, next) => {
    //Middleware function body
}
```

Middleware paramenters

- req: Information and methods related to the incoming request will be stored in this object

- res: This object has information and methods related to sending back a response from the server 

- next: will tell Express that this middleware function is complete. It will then go to the next peiece of middleware

Example of responseive middleware: 

```js
const sayHello = (req, res, next) => {
    res.send("Hello!"); // The send method response with the string Hello
}
```

Example of nonresponsive middleware: 

```js
const logging = (req, res, next) => {
    console.log("A request"); //sends the string to the console but does not respond
    next();
}
```

## Using Middleware

To use the above Middleware in the app.js file add the following code 

```js
app.use(logging);
app.use(sayHello);
```