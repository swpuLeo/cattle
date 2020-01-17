/* 思路：此题可以采取前后双指针的方式来解决，前面一个指针i, 后面一个指针j, 然后先用i往后遍历，找出元音字母，在j往前遍历找出元音字母，然后交换i, j所指向的值即可，
同时需要把i加一，j减一，因为如果不这样进行操作下一次遍历两个值都是元音字母就不会向后遍历，就会导致死循环，此题最大的问题就是要找出该字母是否为元音字母，
我们可以用if来判断，但是感觉代码不够简洁，所以我们可以采用map / set的方式，先存入所有元音字母，然后再去把每个字母都放到map / set中去看看是否存在，存在就是元音字母，不存在就不是。*/
class Solution {
public:
	string reverseVowels(string s) {

		unordered_map<char, int> map{ { 'a', 1}, {'e', 1}, {'i', 1},{'o', 1},{'u', 1},
									{'A', 1},{'E', 1},{'I', 1},{'O', 1},{'U', 1} };
		int i = 0;
		int j = s.length() - 1;
		char temp;
		while (i < j)
		{
			while (i < j&&map[s[i]] != 1) i++;
			while (i < j&&map[s[j]] != 1) j--;
			if (i < j)
			{
				temp = s[i];
				s[i] = s[j];
				s[j] = temp;
			}
			i++; j--;

		}
		return s;
	}
};