var twoSum = function(nums, target) {
  var diffMap = {};
  for (var i = 0; i < nums.length; i++) {
    var cur = nums[i];
    var diff = target - cur;
    if (diffMap[diff] !== undefined) {
      return [diffMap[diff], i];
    }
    diffMap[cur] = i;
  }
};