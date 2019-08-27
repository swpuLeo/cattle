/* 思路：此题只需要使用深度优先遍历算法，每次遍历到一个节点就把该节点的值存入string中，然后判断是否为叶子节点，
如果为叶子节点就需要把该条路路径添加进vector中。本题需要注意string的用法，并且要注意对于string而言，我们采用的赋值传值的方式（不是引用或者指针），
这样就意味着每次调用这个函数就会创建一个新的string，并且还会在调用的时候把上一个string的值穿给他，这样就意味着每个函数中的path均不相同，
对于vector我们采用引用传值的方式，因为我们只需要一个即可，并且我们需要每个函数操作的要一致所以采用引用方式。*/
class Solution {
public:
	void binaryTree(TreeNode* root, string path, vector<string>&res)
	{
		if (root == NULL) return;
		path.append(to_string(root->val));
		path.append("->");
		if (root->left == NULL && root->right == NULL) { path.erase(path.length() - 2); res.push_back(path); }
		binaryTree(root->left, path, res);
		binaryTree(root->right, path, res);
	}
	vector<string> binaryTreePaths(TreeNode* root) {
		string path;
		vector<string>res;
		binaryTree(root, path, res);
		return res;
	}
};