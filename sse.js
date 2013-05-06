exports.ServerSentEvent = ServerSentEvent
exports.sse = sse

function sse() {
  return new ServerSentEvent()
}

function ServerSentEvent() {
  this._event = null
  this._data = null
  this._id = null
  this._retry = null
  this._comment = null
  this._res = null
}

ServerSentEvent.prototype.event = function event(str) {
  this._event = str
  return this
}

ServerSentEvent.prototype.data = function data(obj, bool) {
  if (bool === false) {
    this._data = obj
  } else {
    this._data = JSON.stringify(obj)
  }
  return this
}

ServerSentEvent.prototype.id = function id(str) {
  this._id = str
  return this
}

ServerSentEvent.prototype.retry = function retry(num) {
  this._retry = num
  return this
}

ServerSentEvent.prototype.comment = function comment(str) {
  this._comment = str
  return this
}

ServerSentEvent.prototype.toString = function toString() {
  var str = ''
  if (this._event) str += 'event:' + this._event + '\n'
  if (this._id) str += 'id:' + this._id + '\n'
  if (this._retry) str += 'retry:' + this._retry + '\n'
  if (this._comment) str += 'comment:' + this._comment + '\n'
  if (this._data) str += 'data:' + this._data + '\n'
  return str + '\n'
}
