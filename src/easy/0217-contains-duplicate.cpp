/* 思路：此题方法有两种（哈希表，排序），如果用排序的话推荐大家自己手写一下快排等其他排序方法，再不熟悉怎么写排序方法前尽量不要直接调用，
毕竟大家来是为了提高，而不是单纯为了刷题的。我还是倾向用哈希表的方式，此题一读就是一道典型的哈希映射的方式，
即每个数字对应一个出现次数，所有我们只需要创建一个哈希表然后每遍历一个数字就去里面找是否已经映射过了，
如果映射过了（即已经添加进map中了）就返回true(因为当前数字还没有加进去，如果加进去就是至少两次了)。
如果没有映射过就添加进去即可。此题数据集有些问题哈希竟然比排序慢，那岂不是废了空间又废了时间了。*/
class Solution {
public:
	bool containsDuplicate(vector<int>& nums) {
		unordered_map<int, int> map;//无序map更快
		for (int i = 0; i < nums.size(); i++)
			if (map.count(nums[i]) != NULL) return true;
			else map[nums[i]] += 1;
		return false;
	}
};