const net = require('net');
const { IP, PORT, clientName } = require('./constants');

//  Establishes connection with the game server

 const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // event handle for receiving incoming message from server
  conn.on('data', function (message) {
  console.log(message);
  });

  // event handler for confirming connection and creating player name

  conn.on('connect', function () {
  console.log('Connection estabilished!');
  conn.write(`Name: ${clientName}`);
  });
  

  return conn;
}

module.exports = {
  connect
}