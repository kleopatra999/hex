var version = require("./package.json").version;

var express = require("express");
var compression = require("compression");

var app = express();

// Mountless middleware, called on every request.
app.use(function (req, res, next) {
  // Set the the custom headers.
  res.set('X-Clacks-Overhead', 'GNU Terry Pratchet'); // "A man is not dead while his name is still spoken." - Going Postal, Chapter 4 prologue
  res.set('X-Powered-By', 'Anthill Inside');
  next();
});

app.use(compression());
app.use(express.static('public'));

app.get('/', function(req, res){
  res.send('hello world');
});

var port = process.env.PORT||3000;

app.listen(port, function() {
  console.log("Hex v%s running on port %s", version, port);
});
