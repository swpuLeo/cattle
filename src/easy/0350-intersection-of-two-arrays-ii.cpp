/* 思路：此题可以看成是一道传统的映射题（map映射），为什么可以这样看呢，因为我们需找出两个数组的交集元素，同时应与两个数组中出现的次数一致。
这样就导致了我们需要知道每个值出现的次数，所以映射关系就成了<元素, 出现次数>, 所以我们可以首先统计数组1中所有元素的出现次数。然后再遍历数组2，
如果数组2中的元素在map中存在（出现次数大于0），该元素就是一个交集元素，我们就将其存入返回数组中并且将map中该元素的出现次数减一即可.*/
class Solution {
public:
	vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
		vector<int>rec;
		unordered_map<int, int>map;
		for (int i = 0; i < nums1.size(); i++)
			map[nums1[i]] += 1;
		for (int i = 0; i < nums2.size(); i++)
			if (map[nums2[i]] > 0)
			{
				rec.push_back(nums2[i]);
				map[nums2[i]] -= 1;
			}

		return rec;

	}
};