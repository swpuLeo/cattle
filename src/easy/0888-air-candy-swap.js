/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((prev, next) => prev + next, 0);
  const sumB = B.reduce((prev, next) => prev + next, 0);
  const diff = (sumA - sumB) / 2;
  const set = new Set(B);
  for (let item of A) {
    if (set.has(item - diff)) return [item, item - diff];
  }
};
