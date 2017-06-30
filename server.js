//////////
// Create and run HTTP server with Node.js
//////////

var http = require('http');

var httpServer = http.createServer(function (req, res) {
  console.log('Handling request...');
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=UTF-8'
  });
  res.end('Hello World!');
});

httpServer.listen(3000, '127.0.0.1', function () {
  console.log('Listening http://127.0.0.1:3000/');
});

//////////
// Create and run TCP server with Node.js
//////////

// var net = require('net');

// var tcpServer = net.createServer(function (socket) {
//  socket.setEncoding('utf8');
//  socket.write('hello\r\n');

//  // socket.pipe(socket);
//  socket.on('data', function (input) {
//    this.write('received: ' + input);
//  });

//  socket.on('end', function () {
//    this.end();
//  });

// });

// tcpServer.listen(1337, '127.0.0.1');

///////////
// Create and run server with Node.js and ExpressJS framework
///////////

// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//  console.log("GET /");
//  res.send('Hello World!');
// })

// app.get('/users', function (req, res) {
//  console.log("GET /users");
//  res.send('Users list');
// })

// var server = app.listen(8081, function () {
//  console.log("Listening http://127.0.0.1:8081/")
// })