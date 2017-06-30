var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('connection', function (stream) {
  console.log('Connected');
});

emitter.emit('connection');