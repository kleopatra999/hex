function PostCache() {
  this.posts = {};
}

PostCache.prototype.add = function add(post) {
  return (this.posts[post.slug] = post);
};

PostCache.prototype.get = function get(slug) {
  return this.posts[slug];
};

PostCache.prototype.remove = function remove(slug) {
  // http://perfectionkills.com/understanding-delete/
  return delete this.posts[slug];
};

PostCache.prototype.length = function length() {
  var i = 0;
  for (var key in this.posts) {
    // if the item is defined then count it.
    if (this.posts[key]) i++;
  }
  return i;
};

PostCache.prototype.clear = function clear() {
  // Need to check this won't leave a load of
  // child objects lying about in memory.
  this.posts = {};
};

module.exports = PostCache;
