/* 思路：把两个有序数组进行融合到一个数组中，此过程只用每次比较两个数组元素的大小，
将较小（升序）的元素放入备用数组中，并将此数组索引加一，直到两个数组元素全部融合完毕。*/
class Solution {
public:
	void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
		int i = 0;
		int j = 0;
		vector<int> temp;
		while (i < m&&j < n)
		{
			if (nums1[i] > nums2[j]) temp.push_back(nums2[j++]);
			else temp.push_back(nums1[i++]);
		}
		while (i < m)temp.push_back(nums1[i++]);
		while (j < n)temp.push_back(nums2[j++]);
		for (int k = 0; k < temp.size(); k++)
			nums1[k] = temp[k];
	}
};
