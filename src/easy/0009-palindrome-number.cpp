	/* 思路：回文数有很多种解决办法可以通过栈的方式也可以通过数字翻转的方式，
	但是我们可以通过半数字翻转的方式，就是翻转一般的数字，如果这一半和剩下的一半相等就是回文数。
	*/
	class Solution {
	public:
		bool isPalindrome(int x) {
			if (x < 0 || (x % 10 == 0 && x != 0))//以0结尾的 除了0都不可能是回文数
				return false;
			int res = 0;
			while (x > res)
			{
				res = res * 10 + x % 10;
				x /= 10;
			}
			return x == res || x == res / 10;//如果数字位数为奇数就意味着res把中间的数也加上了，所以需要除以10.
		}
};
	