var net = require('net');
var clients = []

var tcpServer = net.createServer(function (socket) {
  socket.name = 'user' + socket.remotePort;
  clients.push(socket);

  socket.write('welcome ' + socket.name + "\n");
  broadcast(socket.name + " joined the chat\n", socket);

  socket.on('data', function (data) {
    msg = data.toString();
    if (msg.startsWith('name')) {
      changeName(msg.split(' ')[1]);
    } else if (msg.startsWith('send_')) {
      words = msg.split(' ');
      receiver = words[0].replace('send_', '');
      message = msg.replace(words[0] + ' ', '');
      sendToUser(message, receiver);
    } else {
      broadcast(socket.name + '> ' + data, socket);
    }
  });

  socket.on('end', function () {
    clients.splice(clients.indexOf(socket), 1);
    broadcast(socket.name + ' left the chat.\n');
  });

  function broadcast(message, sender) {
    clients.forEach(function (client) {
      if (client === sender) return;
      client.write(message);
    });
  }

  function sendToUser(message, receiverName) {
    receiver = findUser(receiverName);
    if (socket === receiver) return;
    receiver.write(socket.name + ' (private)> ' + message);
  }

  function findUser(userName) {
     return clients.find(function (client) {
      return client.name == userName;
    });
  }

  function changeName(name) {
    socket.name = name.replace('\n', '');
    socket.write('name changed to ' + socket.name + "\n");
  }
});

tcpServer.listen(5000);

console.log("Chat server running at port 5000\n");