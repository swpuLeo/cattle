/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const isDividedBy3 = i % 3 === 0;
    const isDividedBy5 = i % 5 === 0;
    if (isDividedBy3 && !isDividedBy5) {
      res.push('Fizz');
    } else if (!isDividedBy3 && isDividedBy5) {
      res.push('Buzz');
    } else if (isDividedBy3 && isDividedBy5) {
      res.push('FizzBuzz');
    } else {
      res.push('' + i);
    }
  }
  return res;
};
