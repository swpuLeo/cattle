/* 思路：此题需要注意的是，本题中的加法进位最多只是1，所以只有所有数字全部都是9才能在改变数字的位数，
所以我们就只需要判断是不是所有数字都为9，如果某个数字不为9，
就只需要加一然后返回该数组即可；如果该数字为9，就需要把该为改为0，
然后就继续判断下一位（对于下一位相当于我们又才判断剩下的数组加上一会发生什么）
*/
class Solution {
public:
	vector<int> plusOne(vector<int>& digits) {
		for (int i = digits.size() - 1; i >= 0; i--)
			if (digits[i] != 9)
			{
				digits[i] += 1;
				return digits;
			}
			else digits[i] = 0;
		vector<int> res;
		res.push_back(1);
		for (int i = 0; i < digits.size(); i++)
			res.push_back(digits[i]);
		return res;
	}
};

