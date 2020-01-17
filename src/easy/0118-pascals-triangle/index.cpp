/* 思路：首先根据杨辉三角的特性其中的每个数都是它左上方和右上方的数的和，所以我们只需要根据这个特性，
先将每一行开始初始化为1，然后再给这一行剩下的空位A[i][j]赋值（赋值为A[i - 1][j - 1] + A[i][j]），
最后需要将最后一个赋值为1即可*/
class Solution {
public:
	vector<vector<int>> generate(int numRows) {
		vector<vector<int>> ans;
		if (numRows <= 0)return ans;
		ans.push_back(vector<int>(1, 1));
		for (int i = 1; i < numRows; i++)
		{
			vector<int> tmp(1, 1);
			for (int j = 1; j < i; j++)
				tmp.push_back(ans.back()[j - 1] + ans.back()[j]);
			tmp.push_back(1);
			ans.push_back(tmp);
		}
		return ans;
	}
};