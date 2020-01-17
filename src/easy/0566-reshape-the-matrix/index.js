/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  const oarr = nums.join(',').split(',');
  const len = oarr.length;
  if (len !== r * c) return nums;
  const arr = [];
  for (let i = 0; i < len; i++) {
    const or = i / c | 0;
    arr[or] = arr[or] || [];
    arr[or][i % c] = oarr[i];
  }
  return arr;
};


/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// var matrixReshape = function(nums, r, c) {
//   if (!nums[0].length) return nums;
//   const row = nums.length;
//   const col = nums[0].length;
//   if (row * col !== r * c) return nums;
  
//   const res = (new Array(r)).fill(new Array(c));
  
//   for (let i = 0; i < row * col; i++) {
//     const org_x = Math.floor(i / col);
//     const org_y = i % col;
//     const new_x = Math.floor(i / c);
//     const new_y = i % c;
//     console.log(nums[org_x][org_y])
//     console.log(res[new_x][new_y])
//     res[new_x][new_y] = nums[org_x][org_y];
//   }
//   return res;
// };

// console.log(matrixReshape([[1, 2], [3, 4]], 4, 1))