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

  const up = () => {
    conn.write('Move: up');
  }
  
  const down = () => {
    conn.write('Move: down');
  }
  
  const left = () => {
    conn.write('Move: left');
  }
  
  const right = () => {
    conn.write('Move: right');
  }
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
  // setTimeout(() => up(), 250);
  // setTimeout(() => up(), 500);
  // setTimeout(() => up(), 750);
  // setTimeout(() => up(), 1000);
  // setTimeout(() => left(), 1250);
  // setTimeout(() => left(), 1500);
  // setTimeout(() => left(), 1750);
  // setTimeout(() => left(), 2000);
  // setInterval(() => down(), 100);

  });
  

  return conn;
}

module.exports = {
  connect
}