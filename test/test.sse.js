var assert = require('assert')
var sse = require('../sse').sse

describe('sse', function() {
  describe('event', function() {
    it('should set the event', function() {
      var s = sse().event('update')
      assert.equal(s._event, 'update')
    })
  })
  
  describe('data', function() {
    it('should set the data to a JSON', function() {
      var s = sse().data({ prop : 'something' })
      assert.equal(JSON.parse(s._data).prop, 'something')
    })
  })
  
  describe('id', function() {
    it('should set the id', function() {
      var s = sse().id(57)
      assert.equal(s._id, 57)
    })
  })
  
  describe('retry', function() {
    it('should set the retry', function() {
      var s = sse().retry(10000)
      assert.equal(s._retry, 10000)
    })
  })
  
  describe('comment', function() {
    it('should set the comment', function() {
      var s = sse().comment('a comment')
      assert.equal(s._comment, 'a comment')
    })
  })

  describe('toEvent', function() {
    it('should return a server sent event string', function() {
      var str = sse()
        .event('update')
        .data({ prop : 'something' })
        .id(57)
        .retry(10000)
        .comment('a comment')
        .toEvent()

      assert.notEqual(str.indexOf('event:update\n'), -1)
      assert.notEqual(str.indexOf('id:57\n'), -1)
      assert.notEqual(str.indexOf('retry:10000\n'), -1)
      assert.notEqual(str.indexOf('comment:a comment\n'), -1)
      assert.notEqual(str.indexOf('data:{"prop":"something"}'), -1)
      assert.notEqual(str.indexOf('\n\n'), -1)
    })
  })
})
