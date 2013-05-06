[![Build Status](https://travis-ci.org/rsolomo/node-serversentevents.png?branch=master)](https://travis-ci.org/rsolomo/node-serversentevents)

# serversentevents

Lightweight tool for building strings for [Server-Sent Events](http://www.w3.org/TR/eventsource/).

## Usage

Create a string like this:

```javscript
var sse = require('serversentevents').sse

var s = sse()
  .event('update')
  .data({ prop : 'something' }) // serialized to JSON
  .id(57)
  .retry(10000)
  .comment('a comment')
  .toString()

// event:update
// id:57
// retry:10000
// comment:a comment
// data:{"prop":"something"}
```

Then pass it along to res.write().

Check out the examples folder for a full server and client example.

## License

MIT
