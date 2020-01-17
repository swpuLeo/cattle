/* 思路：此题只需要根据二叉平衡树的定义来判断即可，我们只需要判断左右两个孩子节点的高度，
如果高度的绝对值超过1就不是，如果小于等于1就是二叉平衡树。但需要注意此题，我们采用递归的方式，
因为我们需要判断每个节点，切判断方法一模一样，所有可以采取递归的方式，
同时，我们需要判断每个节点都需要（此节点是否为平衡节点和此节点的高度）两个数据，
但一个return不足以返回两个数据，所以我们需要用到C++中的引用传值方式，
对于非引用传值都是属于复制传值方式（即，我们在计算机中复制一个备份，在函数中我们其实操作的就是这个备份）；
而引用传值就是相当于传的这个数据本身，我们的一切操作都相当于对这个数据本身进行传值。
```
void test1(TreeNode& t1) { t1 = NULL; }//引用赋值
void test2(TreeNode t2) { t2 = NULL; }//复制方式赋值
```
对于以上两种方式，我们从外部传入的值为tree1和tree2，
执行了上面两个操作后, 可以看到tree1就为NULL了，
因为引用传值就处理这个数据本身，而tree2还是为原来的值不变，
因为对于复制的方我们在函数里面是处理他的备份，与他无瓜。
*/
class Solution {
public:
	bool isBalanced(TreeNode* root) {
		bool balance = false;
		int h = 0;
		return Balance(root, h);
	}
	bool Balance(TreeNode* root, int &h)
	{
		if (root == NULL)
		{
			h = 0;
			return true;
		}
		if (root->left == NULL && root->right == NULL)
		{
			h = 1;
			return true;
		}
		int hr, hl;
		bool br = Balance(root->left, hl);
		bool bl = Balance(root->right, hr);
		h = (hl > hr ? hl : hr) + 1;//三目运算符
		if (abs(hl - hr) < 2)
			return br & bl;
		return false;
	}
};
```