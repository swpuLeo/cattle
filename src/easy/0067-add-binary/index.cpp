/* 思路：此题需要注意，字符串中高位在字符串的首位，同时我们有两种插入策略，
一种是每次都往首位中插入数字，但这样每次都会使整个字符串全部向后移动一位时间复杂度会到达o(n ^ 2)，
另一种是每次都往字符串后面插入，这样最后再逆序一次（首尾交换），
这样时间复杂度会达到o(n)所以我们采用后者。同时注意，两个字符串长度不一样，
所以要记得其中某个字符串可能还没有完全插入，最后要把剩下的也插入新字符串*/
class Solution {
public:
	string addBinary(string a, string b) {
		int flag = 0;
		int aIndex = a.length() - 1;
		int bIndex = b.length() - 1;
		string res;
		int temp = 0;
		while (aIndex >= 0 && bIndex >= 0)
		{
			temp = a[aIndex--] + b[bIndex--] - '0' - '0' + flag;
			res.push_back((char)((temp % 2) + '0'));
			flag = temp / 2;
		}
		while (aIndex >= 0)
		{
			temp = a[aIndex--] - '0' + flag;
			res.push_back((char)((temp % 2) + '0'));
			flag = temp / 2;
		}
		while (bIndex >= 0)
		{
			temp = b[bIndex--] - '0' + flag;
			res.push_back((char)((temp % 2) + '0'));
			flag = temp / 2;
		}
		if (flag != 0) res.push_back('1');
		reverse(res.begin(), res.end());
		return res;
	}
};
