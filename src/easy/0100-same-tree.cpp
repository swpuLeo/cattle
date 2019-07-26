/* 思路：只需同时遍历两棵树，判断每个位置上的值是否相同即可。可以采取先序，中序，后序均可达到目的。*/
class Solution {
public:
	bool isSameTree(TreeNode* p, TreeNode* q) {
		if (p == NULL && q == NULL) return true;
		if (p == NULL || q == NULL) return false;
		if (p->val != q->val) return false;
		return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);

	}
};
