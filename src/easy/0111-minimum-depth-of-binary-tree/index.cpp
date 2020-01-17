/* 思路：此题只需要采取深度优先遍历算法（先序遍历）求出左右孩子结点最小的高度，然后返回值再加上一即可*/
class Solution {
public:
	int minDepth(TreeNode* root) {
		if (root == NULL) return 0;
		if (root->left == NULL && root->right == NULL) return 1;
		if (root->left == NULL) return minDepth(root->right) + 1;
		if (root->right == NULL) return minDepth(root->left) + 1;

		int l = minDepth(root->left);
		int r = minDepth(root->right);
		return (l > r) ? (r + 1) : (l + 1);
	}
};