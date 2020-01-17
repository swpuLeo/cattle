/* 思路：此题只需要采取深度优先遍历算法（先序遍历）求出左右孩子结点最高的高度，然后返回值再加上一即可*/
class Solution {
public:
	int maxDepth(TreeNode* root) {
		if (root == NULL) return 0;
		if (root->left == NULL && root->right == NULL) return 1;
		int l = maxDepth(root->left);
		int r = maxDepth(root->right);
		return (r > l ? r : l) + 1;

	}
};