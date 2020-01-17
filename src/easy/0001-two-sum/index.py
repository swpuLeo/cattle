class Solution:
  def twoSum(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    n = len(nums)
    dic = {}
    for i in range(n):
      diff = target - nums[i]
      if nums[i] in dic:
        return dic[nums[i]], i
      dic[diff] = i
