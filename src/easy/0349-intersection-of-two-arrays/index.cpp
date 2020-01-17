/* 思路：此题就是一道典型的考察集合使用的一道题，我们只需要把一个数组中的元素全部放入set中，然后再遍历另一个数组，
遍历的值如果能在set中找到，那么就说明该值是交集，此时我们就应该放入另一个set中（去重，我们不想最后的数组中有多个相同的值）。
最后再把set转化为vector即可。*/
class Solution {
public:
	vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
		vector<int>rec;
		unordered_set<int>set1;
		unordered_set<int>set2;
		for (int i = 0; i < nums1.size(); i++)
			set1.insert(nums1[i]);
		for (int i = 0; i < nums2.size(); i++)
			if (set1.find(nums2[i]) != set1.end())
				set2.insert(nums2[i]);
		rec.assign(set2.begin(), set2.end());
		return rec;

	}
};