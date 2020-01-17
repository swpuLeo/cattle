/* 思路：此题可以采用头插法，一个一个的移动。但是有种更加简单的选择数组的方式。我们可以采用翻转的方式，
比如12345经过翻转就变成了54321，这样已经做到了把前面的数字放到后面去，但是还没有完全达到我们的要求，
比如，我们只需要把12放在后面去，目标数组就是34512，与54321对比发现我们就只需要在把分界线前后数组再进行翻转一次就可得到目标数组了。
所以此题只需要采取三次翻转的方式就可以得到目标数组，首先翻转分界线前后数组，再整体翻转一次即可。此题面试常考，大家可以记一下此方法。*/
class Solution {
public:
	void reverse(vector<int>& nums, int begin, int end)
	{
		int temp;
		while (begin < end) {
			temp = nums[begin];
			nums[begin] = nums[end];
			nums[end] = temp;
			begin++;
			end--;
		}
	}
	void rotate(vector<int>& nums, int k) {
		if (nums.size() < 2) return;
		k %= nums.size();
		reverse(nums, 0, nums.size() - 1);
		reverse(nums, 0, k - 1);
		reverse(nums, k, nums.size() - 1);
	}
};