/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const stack = [];
  let sum = 0;
  let score = 0;
  for (let op of ops) {
    if (!isNaN(Number(op))) {
      stack.push(Number(op));
      sum += Number(op);
    } else if (op === 'C') {
      score = stack.pop();
      sum -= score;
    } else if (op === 'D') {
      score = stack[stack.length - 1] * 2;
      stack.push(score);
      sum += score;
    } else if (op === '+') {
      score = stack[stack.length - 2] + stack[stack.length - 1];
      stack.push(score);
      sum += score;
    }
  }
  return sum;
};
