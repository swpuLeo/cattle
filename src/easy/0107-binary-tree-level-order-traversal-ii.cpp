/* 思路：此题需要熟悉二叉树的层次遍历，对于常见的层次遍历是利用队列（先进先出）的特性进行实现的，
总的思路就是我们每遍历一个节点就把该节点的左孩子和右孩子放进队列（顺序很重要），
然后遍历完这个节点之后就从队列中取出头节点（取出的节点有可能是右边的同层节点，
也有可能是下一层的第一个节点），然后直到遍历完成。以上就是层次遍历的思路。
对于本题，额外需要注意的是判断什么时候遍历完一层，
我们可以采取使用一个记录下一层位置的一个值来判断什么时候完成遍历的。
我们首先就应该在循环外面把根节点放入队列，然后令last等于0，这其实是让last指向队尾，
什么时候我们从队列中取出元素，如果取出到last的时候就代表我们已经遍历完一层，同时每遍历完一层，
就应该更新last的值，让last = rear, 因为遍历完一层了，说明旗下所有的孩子均已经入队了，
所以此时rear就对应出下一层的最大值。此算法强烈推荐大家记住，面试常考。*/
class Solution {
public:
	vector<vector<int>> levelOrderBottom(TreeNode* root) {
		vector<vector<int>>res;
		if (root == NULL)
			return res;
		TreeNode*queue[10000];
		int rear, front;
		int last;
		rear = front = -1;//不能为0，因为下面在循环外面把根节点入队了。
		last = 0;
		TreeNode* p = root;
		queue[++rear] = p;
		vector<int> floor;
		while (rear != front)
		{
			p = queue[++front];
			floor.push_back(p->val);
			if (p->left != NULL)
				queue[++rear] = p->left;
			if (p->right != NULL)
				queue[++rear] = p->right;
			if (last == front)//如果相等就代表出队出到了我们指定的位置代表一层已经遍历完成。
			{
				last = rear;
				res.push_back(floor);
				floor.clear();
			}
		}
		reverse(res.begin(), res.end());
		return res;
	}
};