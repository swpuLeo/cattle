/* 思路：首先需要知道二叉搜索树是一种用于快速搜索的数据结构，
定义为：左孩子上所有节点均小于右孩子上的（使用中序遍历出来的序列一定有序）。
对于平衡二叉搜索树，是在二叉搜索树的一种改进，是为了防止我们查找次数过多
（节点两边不平衡，一边过少，导致树很高，但节点不多，有很多空指针），所有我们要限制树，
使其能更加紧凑，每个节点左右两边节点数目差不多（严格定义是左右相差不能超过1）。
这个时候我们对有序数组采取二分搜索的方式就可以最方便的得到满足题的树。*/
class Solution {
public:
	TreeNode* changeToBST(vector<int>& nums, int begin, int end)
	{
		if (begin > end) return NULL;
		int mid = begin + (end - begin) / 2;
		TreeNode*root = new TreeNode(nums[mid]);
		root->left = changeToBST(nums, begin, mid - 1);
		root->right = changeToBST(nums, mid + 1, end);
		return root;
	}
	TreeNode* sortedArrayToBST(vector<int>& nums) {
		return changeToBST(nums, 0, nums.size() - 1);
	}
};
