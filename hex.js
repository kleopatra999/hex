/// <reference path="typings/node/node.d.ts"/>
/// <reference path="typings/express/express.d.ts"/>

var version = require('./package.json').version;

var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');

var PostCache = require('./lib/postCache');
var Routes = require('./routes/routes');

var app = express();
app.use(compression());
app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

// Environment dependant config!
if (app.get('env') == 'production') {
  app.use(logger('common'));
} else {
  app.use(logger('dev'));
}

// Mountless middleware, called on every request.
app.use(function (req, res, next) {
  // Set the the custom headers.
  // 'A man is not dead while his name is still spoken.' - Going Postal, Chapter 4 prologue
  res.set('X-Clacks-Overhead', 'GNU Terry Pratchet');
  res.set('X-Powered-By', 'Hex: Anthill Inside');
  next();
});

// Set hbs (handlebars) view engine
app.set('view engine', 'hbs');
app.set('views', './views');

// Initialise cache
var cache = new PostCache();

// Routing
var router = new Routes(cache);

app.get('/', router.onRootRoute);
app.get('/:year/:month/:day/:slug', router.onPostRoute);
app.get('/:page', router.onPageRoute);

// Error handling *must* be the last use statement.
app.use(function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).render('500', err);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Hex v%s running on port %s', version, port);
});
