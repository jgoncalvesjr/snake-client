const net = require('net');

/**
 * Establishes connection with the game server
 */

 const connect = function() {
  let delay = 0;
  const conn = net.createConnection({ 
    host: '135.23.222.131 ',
    port: 50541
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
  const clientName = 'JÃO';
  conn.write(`Name: ${clientName}`);
  });
  

  return conn;
}

module.exports = {
  connect
}