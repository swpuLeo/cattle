/* 思路：此题就是一个进制转化的题，将26进制（1 - 26不含0）转化为10进制数即可。*/
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