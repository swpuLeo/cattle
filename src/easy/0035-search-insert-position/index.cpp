/* 思路：此题给定的数组是有序的，所以在搜索算法中对于有序数组效果最好的就是二分查找法。
所谓二分查找就是每次都取数组中间的数，如果目标比他大就舍去前半段，如果目标更小就舍去后半段。
值得注意的是取中间位置（begin + end） / 2这样做有可能会溢出。
*/
class Solution {
public:
	int searchInsert(vector<int>& nums, int target) {
		int begin = 0;
		int end = nums.size() - 1;
		int mid;
		while (begin <= end)
		{
			mid = begin + (end - begin) / 2;
			if (nums[mid] == target) return mid;
			else if (nums[mid] > target)
				end = mid - 1;
			else begin = mid + 1;
		}
		return begin;
	}
};

