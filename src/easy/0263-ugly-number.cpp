/* 思路：此题较为简单，想要判断一个数的因子是否为2, 3, 5只需要判断对这个几个数进行取模然后再除以这几个数，直到最后为1即是丑数。
如果对这个几个数取模都不能整除那一定不是丑数，所以使用else if，一直连续判断，如果除以2, 3, 5, 都除不尽那就是丑数*/
class Solution {
public:
	bool isUgly(int num) {
		if (num <= 0) return false;
		while (num != 1)
		{
			if (num % 2 == 0) num /= 2;
			else if (num % 3 == 0) num /= 3;
			else if (num % 5 == 0) num /= 5;
			else return false;
		}
		return true;
	}
};