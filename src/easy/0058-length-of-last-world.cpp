/* 思路：此题只需要逆序遍历即可，但是要注意排除掉最后的空格。*/
class Solution {
public:
	int lengthOfLastWord(string s) {
		int i = s.length() - 1;
		for (; i >= 0 && s.at(i) == ' '; i--);
		int j = i;
		for (; j >= 0 && s.at(j) != ' '; j--);
		return i - j;
	}
};
