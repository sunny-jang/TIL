// Require events module.
var events = require('events');

// Create EventEmitter object
var eventEmitter = new events.EventEmitter();

// Create EventHandler function
var connectHandler = function connected() {
  console.log("Connection Successful");

  // Execute data_recevied event
  eventEmitter.emit('data_recived');
}

// Link connect event and connectHandler
eventEmitter.on('connection', connectHandler);

// Link data_received event and anonymous function