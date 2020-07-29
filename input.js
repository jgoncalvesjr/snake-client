let connection;

const handleUserInput = key => {
  switch (key) {
    case '\u0003': // ctrl+c to bail from game
    process.exit();
    break;
    case '\u0077': // w
    connection.write('Move: up');
    break;
    case '\u0061': // a
    connection.write('Move: left');
    break;
    case '\u0073': // s
    connection.write('Move: down');
    break;
    case '\u0064': // d
    connection.write('Move: right');
    break;
    case '\u006A': // j
    connection.write('Say: Sup n00b');
    break;
    case '\u006B': // k 
    connection.write('Say: Gotcha STONKS!');
    break;
    case '\u006C': // l
    connection.write('Say: BASED move');
    break;
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