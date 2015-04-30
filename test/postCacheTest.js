/// <reference path="../typings/mocha/mocha.d.ts"/>

var should = require('should');

var Post = require('../lib/post');
var PostCache = require('../lib/postCache');

var cache;

describe('PostCache', function () {

  beforeEach(function(){
    cache = new PostCache();
  });

  describe('ctor', function(){
    it('should be empty when first initilised', function(){
      cache.length().should.equal(0);
    });
  });

  describe('.add', function(){
    it('should be able to add an item', function(){
      var added = cache.add(new Post('testpost'));

      added.should.exist;
      added.should.have.property('slug', 'testpost');

      cache.length().should.equal(1);
    });

    it('should replace a duplicate item an not add a new one', function(){
      cache.add(new Post('testpost'));
      cache.add(new Post('testpost'));

     cache.length().should.equal(1);
    });

    it('should not allow execeeding the max cache size');
  });

  describe('.get', function(){
    it('should be able to get an item', function(){
      var slug = 'testpost';

      cache.add(new Post(slug));
      cache.length().should.equal(1);

      var p = cache.get(slug);
      p.should.exist;
      p.should.have.property('slug', slug);
    });

    it('should return undefined getting an item not added', function(){
      var p = cache.get('testpost');
      should.not.exist(p);
    });
  });

  describe('.remove', function(){
    it('should be able to remove an item', function(){
      cache.add(new Post('testpost'));
      cache.length().should.equal(1);
      cache.remove('testpost');
      cache.length().should.equal(0);
    });

    it('should be return undefined getting a removed item', function () {
      var slug = 'testpost';
      cache.add(new Post(slug));
      cache.length().should.equal(1);
      cache.remove(slug);
      cache.length().should.equal(0);
      var p = cache.get(slug);
      should.not.exist(p);
    });
  });

  describe('.length', function(){
    it('should give the correct length on the cache',function(){
      cache.length().should.equal(0);
      cache.add(new Post('one'));
      cache.length().should.equal(1);
      cache.add(new Post('two'));
      cache.length().should.equal(2);

      for (var i = 0 ;i < 30 ; i++) {
        cache.add(new Post(i.toString()));
      }
      cache.length().should.equal(32);

      cache.clear();
      cache.length().should.equal(0);
    });
  });

  describe('.clear', function(){
    it('should be empty after a clear is performed', function () {
      for (var i = 0 ; i < 30 ; i++) {
        cache.add(new Post(i.toString()));
      }
      cache.length().should.equal(30);

      cache.clear();
      cache.length().should.equal(0);
    });
  });

});
