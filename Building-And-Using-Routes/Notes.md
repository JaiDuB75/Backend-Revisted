## What are routes? 

A route is a path is the part of the URL that comes after the domain name. 

| HTTP verb | Express Method |
|-----------|----------------|
| `DELETE` | `app.delete()` |
| `GET` | `app.get()` |
| `POST` | `app.post()` | 
| `PUT` | `app.put()` | 

These functions work similarly to app.use(). For example, the following is a route in Express that will respond with the text OK when you go to the URL http://localhost:5000/ping.

```js
app.get("/ping", (req, res) => {
  res.send("OK");
});
```

This builds a route at /ping.

Routes are middleware except they will only respond when the request URL matches the route.

## Creating Routes

```js
app.get("/hello", sayHello);
```

Start the server and go to `http://localhost:5000/hello` to see the sayHello message. 