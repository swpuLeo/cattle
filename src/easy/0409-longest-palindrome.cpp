/* 思路：此题要求我们求最长回文字符串的长度而不是求出这个最长的回文字符串所以，什么叫做回文串呢，将其对折能够完全重合的就叫做回文字符串，
所以回文字符串有个特点就是除了中间一位（奇数位中）可以有一位字符是单个的，其余字符必须是成双成对的，这样就把问题转化为，字符串中有多少对字符，
然后如果字符串中还能有其他不成对的我们还可以再加上一位这就构成了最长的回文串。*/
class Solution {
public:
	int longestPalindrome(string s) {
		unordered_map<char, int>map;
		int count = 0;
		bool mark = false;
		for (int i = 0; i < s.length(); i++)
			map[s[i]]++;
		for (int i = 0; i < map.size(); i++)
		{
			if (map[i] % 2 != 0) mark = true;
			count += (map[i] / 2) * 2;
		}

		return count + mark;
	}
};