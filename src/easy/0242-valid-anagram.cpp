/* 思路：此题只需要需要找两个字符串是否字母异构，这个异构是没有任何限制的，意思就是两个字符串只要能找到一种重新排序方法把使得两个字符串相等就好，
这意味着，只需要两个字符串中各个字母个数相同即可，顺序无所谓，所以我们只需要一个数组记录一个字符串各个字母的个数，然后再遍历另一个数组，
遇到一个字母就把对应字母个数减一，如果为负了就说明字母个数不一样。此题只需要创建一个数组就行了，单数数组必须进行初始化，
在c++中单纯创建一个数组内部是没有初始化的，但是  int* data = new int[26](); 这个括号就代表了告诉编译器要初始化，所以是个小技巧，大家可以记住，面试也常考。*/
class Solution {
public:
	bool isAnagram(string s, string t) {
		int *data = new int[26]();
		int n = s.length();
		int m = t.length();
		int temp;
		if (n != m) return false;
		for (int i = 0; i < m; i++)
		{
			temp = s.at(i);
			data[temp - 'a']++;
		}

		for (int i = 0; i < n; i++) {
			temp = t.at(i);
			data[temp - 'a']--;
			if (data[temp - 'a'] < 0) return false;
		}
		return true;
	}
};