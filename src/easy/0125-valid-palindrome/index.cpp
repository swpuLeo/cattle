/* 思路：可以先把大小写转换一下再进行判断，因为不转化"0P"这组数据就不容易判断出来
（这数据是真的秀'P' - '0'的ascii码为32等于'A' - 'a'）。*/
class Solution {
public:
	bool isPalindrome(string s) {
		int n = s.length();
		int i = 0;
		int k = 0;
		for (; i < n; ++i)
		{
			if (s[i] >= 'A'&&s[i] <= 'Z')
				s[k++] = s[i] + 'a' - 'A';
			else if ((s[i] >= 'a'&&s[i] <= 'z') || s[i] >= '0'&&s[i] <= '9')
				s[k++] = s[i];
		}
		if (k == 0) return true;
		for (i = 0; i < k / 2; i++)
		{
			if (s[i] != s[k - i - 1]) return false;
		}
		return true;
	}
};