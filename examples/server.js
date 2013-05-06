var fs = require('fs')
var http = require('http')
var sse = require('../sse').sse
var id = 0

http.createServer(function(req, res) {
  if (req.url === '/events') serveEvents(req, res)
  if (req.url === '' || req.url === '/') serveClient(req, res)
}).listen(8080)

function serveEvents(req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/event-stream' })
  res.setTimeout(0)
  var intervalId = setInterval(function() {
    var str = sse()
      .event('ping')
      .id(++id)
      .data(Date.now())
      .toString()
    res.write(str)
  }, 5000)

  // Clean stuff up
  req.on('close', function() {
    clearInterval(intervalId)
  })
}

function serveClient(req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/html' })
  fstream = fs.createReadStream('client.html').pipe(res)
}
