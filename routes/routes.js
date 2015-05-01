var util = require('util');

function Routes(cache) {
  this.cache = cache;
  cache.add({ slug: 'about' });
  
//  this.onPageRoute = onPageRoute;
}

Routes.prototype.onRootRoute = function onRootRoute(req, res, next) {
  res.send('Home route');
};

Routes.prototype.onPageRoute = function onPageRoute(req, res, next) {
  /*
    build the url slug
    fetch from the cache
    render the response via hbs
  */
  var slug = req.params.page;
  res.send(slug);
};

Routes.prototype.onPostRoute = function onPostRoute(req, res, next) {
  var slug =
    util.format('%s/%s/%s/%s',
      req.params.year,
      req.params.month,
      req.params.day,
      req.params.slug);

  res.send(slug);
};

module.exports = Routes;
