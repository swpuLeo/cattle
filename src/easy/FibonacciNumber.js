/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 1) return N;
  return fib(N - 1) + fib(N - 2);
};

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 1) return N;
  let first = 0;
  let second = 1;
  for (let i = 2; i <= N; i++) {
    [first, second] = [second, first + second];
  }
  return second;
};
