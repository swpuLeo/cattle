var robotSim = function(commands, obstacles) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let face = 0;
  let x = 0, y = 0;
  let max = 0;
  let map = {};
  obstacles.forEach(obs => {
    map[obs.toString()] = 1;
  });
  commands.forEach(cmd => {
    if (cmd === -1) face = (face + 1) % 4;
    else if (cmd === -2) face = (face + 3) % 4;
    else {
      for (let i = 0; i < cmd; i++) {
        if (`${x + dx[face]},${y + dy[face]}` in map) break;
        else {
          x += dx[face];
          y += dy[face];
        }
      }
    }
    max = Math.max(max, x * x + y * y);
  });
  return max;
};
