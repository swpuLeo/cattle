/* 思路：此题就是树的一种典型应用，要想翻转二叉树只需要交换每个节点的孩子节点节课，由于我们对父节点的操作和对孩子节点的操作是一样的，
所以可以采取递归的方式，我们可以先交换两个节点再进入两个孩子（先序优先遍历），也可以进入两个孩子之后再交换两个节点（后序优先遍历）。
但是如果我们想要使用中序优先遍历的话，就需要做些调整，比如我们先进入左孩子再交换两个孩子，此时如果我们进入右孩子的话，其实我们进入的就是左孩子，
因为刚刚进行了交换，所以我们任然需要进入左孩子。*/
TreeNode* invertTree(TreeNode* root) {//先序优先遍历
	if (root == NULL) return root;
	TreeNode* temp = root->left;
	root->left = root->right;
	root->right = temp;
	invertTree(root->left);
	invertTree(root->right);
	return root;
}
TreeNode* invertTree(TreeNode* root) {//后序优先遍历
	if (root == NULL) return root;
	invertTree(root->left);
	invertTree(root->right);
	TreeNode* temp = root->left;
	root->left = root->right;
	root->right = temp;
	return root;
}
TreeNode* invertTree(TreeNode* root) {//中序优先遍历
	if (root == NULL) return root;
	invertTree(root->left);
	TreeNode* temp = root->left;
	root->left = root->right;
	root->right = temp;
	invertTree(root->left);
	return root;
}