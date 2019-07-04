# xhrJSON
**xhrJSON** is an API for simplifying XML-HTTP-Requests whithout the need of a heavy librarie like JQuery.

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
* **url** has to have a **/** at the back if it does not specifically route to a file.
* **data** has to be **JSON** formatted.
* You **HAVE TO** make an anonymous function for the callback. Otherwise it will not work.

### Usage

To use xhrJSON paste
```html
<script src="https://raw.githubusercontent.com/GaussAGCEO/xhrJSON/master/xhrJSON.min.js"></script>
```
into your application's header.
You should only use this link for development.

### Future Features

In a later version it will support the JQuery like parameters **success** instead of a seperate callback and the parameter **error** for error handling. 
