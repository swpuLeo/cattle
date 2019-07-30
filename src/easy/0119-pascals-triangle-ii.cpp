/* 思路：首先根据杨辉三角的特性其中的每个数都是它左上方和右上方的数的和，
只需要利用该特性，同时我们要注意此题的空间复杂度只能为o(n)，
所以我们可以创建两个数组，一个用于保存我们当前行的值（res）
，一个用于保存上一行的值(temp).然后依据杨辉三角特性赋值即可，
如果赋值完成我们要进行下一个赋值的话，此时Res就成了上一行，
我们就需要令temp = res 。同时此题可以利用c++中vector的  vector<int> res(5, 1); 
的初始化方式（此方式就是把res中分配5个int型空间，并且全部赋值为1）*/
class Solution {
public:
	vector<int> getRow(int rowIndex) {
		vector<int> res(rowIndex + 1, 1);
		vector<int> temp(rowIndex + 1, 1);
		for (int i = 2; i <= rowIndex; i++)
		{
			for (int j = 1; j < i; j++)
				res[j] = temp[j - 1] + temp[j];
			temp = res;
		}
		return res;
	}
};