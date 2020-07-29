const handleUserInput = key => {
  switch (key) {
    case '\u0003': // ctrl+c to bail from game
    process.exit();
  }
}

const setupInput = conn => {
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