/* 思路：此题依然可以采取哈希表的方式，只不过这次哈希表映射的东西变了，我们可以采取映射每个数字的位置，有人可能会问，
对于相同数字，怎么映射他们的位置呢？其实大可不必担心，因为本题找的是两个位置差的小于k，所以我们每遍历一个数字就去找是否map中存在，
如果存在就判断map中存的那个数字出现的位置和当前位置之差，如果小于k就返回true。进行该操作后，我们还需要把当前遍历到的数字存入map中，
不管这个数字是否存在，因为即使存在哪位置也必定更靠前，得出的差值也必定更大，所有不管出现过没有直接放入该数字以及位置，
以便下次遍历到相同数字时使用。*/
class Solution {
public:
	bool containsNearbyDuplicate(vector<int>& nums, int k) {
		unordered_map<int, int>map;
		for (int i = 0; i < nums.size(); i++)
		{
			if (map.count(nums[i]) != NULL && i - map[nums[i]] <= k) return true;
			map[nums[i]] = i;
		}
		return false;
	}
};