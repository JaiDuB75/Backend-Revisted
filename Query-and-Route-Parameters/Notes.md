## What are Query Parameters? 

A query parameter is a key-value pair in a query string, used to filter the resources requested from the server. 

Example: 

```
https://www.google.com/search?q=javascript
```

A query string is text that comes at the end of a URL following a question mark ?. It provides additional information to the given route and can contain multiple query parameters. A query parameter is a key-value pair in a query string. The key and the value are strings separated by an equals sign =. In the above example, the query parameter key is q and the value is javascript.

## Using Query Parameters

Example: 

```js
const sayHello = (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};
```

When the above code runs then the name that is passed in the address bar will be displayed. 

Example: 

```
http://localhost:5000/hello?name=Danni
```

The address above would return the "Hello, Danni"

## What are Route Parameters? 

Route Parameters are a part of the URL that changes depending on the data to be displayed on the website, used to access parts if a URL by storing the value in a variable. 

## Using Route Parameters

Example:

```js
const saySomething = (req, res) => {
  const greeting = req.params.greeting;
  const content = `${greeting}!`;
  res.send(content);
};

app.get("/say/:greeting", saySomething);
```

The route that you define contains two parts, one of which has a colon : in front of the string greeting. In your route function, you can access all route parameters with req.params, which will return an object. If there are any, they will be stored inside as key-value pairs.

