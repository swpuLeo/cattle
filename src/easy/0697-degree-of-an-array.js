/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const map = {};
  nums.forEach(item => {
    if (!map[item]) map[item] = 1;
    else map[item] += 1;
  });
  let arr = [];
  let max = 1;
  for (let key in map) {
    if (map[key] > max) {
      arr = [];
      arr.push(Number(key));
      max = map[key];
    } else if (map[key] === max) {
      arr.push(Number(key));
    }
  }
  let res = Infinity;
  arr.forEach(item => {
    const first = nums.indexOf(item);
    const last = nums.lastIndexOf(item);
    res = Math.min(res, last - first + 1);
  });
  return res;
};