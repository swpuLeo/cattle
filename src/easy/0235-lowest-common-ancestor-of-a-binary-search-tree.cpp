/* 思路：此题其实是一道后序遍历的特性题，但是由于树被限定为了 二叉搜索树，此题就变得很简单了。因为由于二叉搜索树具有很强的特性，
每个节点的右孩子均大于左孩子，所以我们要找他们最先出现的祖先节点，这意味着他们一定在某一个节点的两边，对于这个节点就是他们最先出现的祖先节点，
此节点满足二叉搜索树种的特点，只需要找到某个节点中同时满足大于p节点的值还满足小于q节点的值即可（因为题目规定p < q）*/
	class Solution {
	public:
		TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
			if (root == NULL) return NULL;
			if (root->val > p->val&&root->val < q->val) return root;
			if (root->val > p->val&&root->val > q->val) return lowestCommonAncestor(root->left, p, q);
			if (root->val < p->val&&root->val < q->val) return lowestCommonAncestor(root->right, p, q);
			return root;
		}
};
