/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
  let res = 0;
  nums.forEach(num => { res ^= num });
  return res;
};

/**
 * 使用 Hash
 
var singleNumber = function(nums) {
  const helper = {};

  for (let i = 0; i < nums.length; i++) {
    if (helper[nums[i]] === undefined) helper[nums[i]] = 1;
    else helper[nums[i]] += 1;
  }

  for (i in helper) {
    if (helper[i] === 1) {
      return i;
    }
  }
};

**/

/**
 * 一般思路
  
  var singleNumber = function(nums) {
  if (!nums || !nums.length) return null
  const helper = []
  for (let i = 0, len = nums.length; i < len; i++) {
    const index = helper.indexOf(nums[i])
    if (index < 0) {
      helper.push(nums[i])
    } else {
      helper.splice(index, 1)
    }
  }
  return helper[0]
}; 

**/
