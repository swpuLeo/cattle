/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const map = new Map();
  for (let i = 0; i < moves.length; i++) {
    if (map.get(moves[i])) map.set(moves[i], map.get(moves[i]) + 1);
    else map.set(moves[i], 1);
  }
  return map.get('U') === map.get('D') && map.get('L') === map.get('R');
};

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x = 0;
  let y = 0;
  moves.split('').forEach(item => {
    if (item === 'L') x -= 1;
    if (item === 'R') x += 1;
    if (item === 'U') y += 1;
    if (item === 'D') y -= 1;
  });
  return x === 0 && y === 0;
};
