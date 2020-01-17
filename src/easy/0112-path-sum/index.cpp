/* 思路：我们可以采取递归遍历的方式，每次都把此节点到根节点的值再加上自己返回，
如果遍历到叶子节点（左右为空）再判断是否等于target如果相等就成立。*/
class Solution {
public:
	bool getSum(TreeNode* root, int now, int sum)
	{
		if (root == NULL) return false;
		now += root->val;
		if (root->left == NULL && root->right == NULL && now == sum)return true;
		return getSum(root->left, now, sum) || getSum(root->right, now, sum);
	}
	bool hasPathSum(TreeNode* root, int sum) {
		return getSum(root, 0, sum);
	}
};
