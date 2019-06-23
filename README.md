# xhrJSON
An API for simplifying XHR without JQuery

___
### Syntax

```js
xhrJSON({
  url: "http://localhost:8080/",
  data: {"username": "test"}
}, function(res){
  console.log(res);
});
```

### Features

It is almost like JQuery and supports the parameters url and data which you probably konow from there.
* **url** has to has a **/** at the back if it does not specifically route to a file.
* **data** has to be **JSON** formatted.
* You **HAVE TO** make an anonymous function for the callback. Otherwise it will not work.

### Future Features

In a later version it will support the JQuery like parameters **success** instead of a seperate callback and the parameter **error** for error handling. 
