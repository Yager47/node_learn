// import Hapi from 'hapi';
var Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: 8080
});

server.route({
  method: 'GET',
  path:   '/hello',
  
  handler: (request, reply) => {
    reply('Hello.');
  }
});

server.start(err => {
  if (err) {
    console.error('Error was handled!');
    console.error(err);
  }

  console.log("Server started at ${ server.info.uri }");
});