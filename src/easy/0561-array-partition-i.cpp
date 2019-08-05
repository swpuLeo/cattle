/* 思路：这道题有点田忌赛马的影子，这道题的关键就是谁与谁组队相比较的问题，由于求最大的值，
所以我们要尽可能的保留大的值，假如按照最大 + 最小，第二大 + 第二小，就会直接把最大和第二大的数舍去了，
如果最大与第二大组队就可以保留第二大的数字，以此类推，我们只需要排序之后，相邻之间组队就可以留下最大的值*/
class Solution {
public:
	int arrayPairSum(vector<int>& nums) {
		sort(nums.begin(), nums.end());
		int sum = 0;
		for (int i = 0; i < nums.size(); i += 2)
			sum += nums[i];
		return sum;
	}
};
