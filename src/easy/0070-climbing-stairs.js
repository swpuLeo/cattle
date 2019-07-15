/**
* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
 let n1 = 1
 let n2 = 1

 for (let i = 2; i <= n; i++) {
   let ways = n1 + n2
   n1 = n2
   n2 = ways
 }

 return n2
};