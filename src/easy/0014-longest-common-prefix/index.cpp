/* 思路：首先需要注意，这道题只是找出最长的前缀，意思是所有字符串都必须从头开始遍历，
如果有任何一位不同就停止，不在往后遍历，所以只需要遍历所有字符串的同一位即可。
*/
class Solution {
public:
	string longestCommonPrefix(vector<string>& strs) {
		string res;
		if (strs.size() == 0) return res;
		for (int i = 0; i < strs[0].length(); i++)
		{
			char temp = strs[0].at(i);
			for (int j = 1; j < strs.size(); j++)
				if (i >= strs[j].length() || strs[j].at(i) != temp) return res;
			res.append(1, temp);
		}
		return res;
	}
};