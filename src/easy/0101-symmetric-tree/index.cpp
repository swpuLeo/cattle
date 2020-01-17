/* 思路：此题需要注意什么是镜像对称，镜像对称是将其对折可以重合的一种对称，
所以我们可以采用将此树复制一颗出来，然后将其旋转180度，再判断这棵树和原来的那棵树是否相同，
如果相同就对称，不同就不对称(字母A旋转180度后还是A所以是对称的)，
在代码中可以使用两颗同样的树，用其左边和右边进行比较即可*/
class Solution {
public:
	bool Symmetric(TreeNode* root1, TreeNode* root2) {
		if (root1 == NULL && root2 == NULL) return true;
		if (root1 == NULL || root2 == NULL) return false;
		if (root1->val != root2->val)return false;
		return Symmetric(root1->left, root2->right) && Symmetric(root1->right, root2->left);

	}
	bool isSymmetric(TreeNode* root) {
		return Symmetric(root, root);
	}

};