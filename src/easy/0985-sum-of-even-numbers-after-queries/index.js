/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  const answer = [];
  const start = A.filter(a => a % 2 === 0).reduce((prev, next) => prev + next, 0);
  let ans = start;
  for (let i = 0; i < queries.length; i++) {
    const index = queries[i][1];
    const val = queries[i][0];
    const cur = A[index];
    if (cur % 2 === 0) {
      val % 2 === 0 ? ans += val : ans -= cur;
    } else {
      val % 2 === 0 ? ans = ans : ans += cur + val;
    }
    A[index] += val;
    answer.push(ans);
  }
  return answer;
};
