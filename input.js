const { MOVE, SAY } = require('./constants');

let connection;

const handleUserInput = key => {
    if (key === '\u0003') {
      process.exit();
    }
    if (MOVE[key]) {
      connection.write(MOVE[key]);
    }
    if (SAY[key]) {
      connection.write(SAY[key]);
    }
}

const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key)
  });
  return stdin;
}

module.exports = {
  setupInput
}