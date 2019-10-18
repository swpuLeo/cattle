/* 思路：首先此题是一道递归题，如果是求所有节点之和的话，那么我们递归就是先求左孩子为根节点的树的和，再就右孩子为根节点的树的和，
然后再将左右之和加上本身节点的值就求出了一个树的节点之和，那么怎么求左右节点树的和呢，此时就要用到递归了，我们把左右孩子又作为根节点，
然后再用同样的方法来求他们的左右孩子，最后加上就完了。但是 如果不加限制我们就会出现一直递归的情况，所以我们需要加上限制条件，可以加上当传入的节点返回0即可。*/
class Solution {
public:
	int sumOfLeftLeaves(TreeNode* root) {
		if (root == NULL) return 0;
		return sumOfLeftLeaves(root->left) + sumOfLeftLeaves(root->right) + root->val;
	}
};
/*此题加上一些限制条件，我们只需要稍加改变即可，首先就是我们只求叶子节点之和（左孩子右孩子为空就可以判断是否为叶子节点），
然后需要判断是否是左边的叶子节点，所以我们只需要判断每个节点左边节点是否为空，如果不为空是否为叶子节点，如果成立我们就返回这个左孩子的值再加上向右边孩子进行递归计算的值（
右孩子中也有可能有左叶子节点）。*/
class Solution {
public:
	int sumOfLeftLeaves(TreeNode* root) {
		if (root == NULL) return 0;
		if (root->left != NULL && root->left->right == NULL && root->left->left == NULL) return sumOfLeftLeaves(root->right) + root->left->val;
		return sumOfLeftLeaves(root->left) + sumOfLeftLeaves(root->right);
	}
};