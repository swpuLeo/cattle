/* 思路：此题可以采取循环遍历的方式，但是这样效率为O(N ^ 2)。所以可以采取哈希映射的方式，其实此题就是一道典型的哈希映射题，
比如对于tit和pap，对于所有的t所对应的就是p，所有的i就是对应的a.正好map的数据结构可以满足我们的这种映射要求。
我们只需要每遍历一位，就去map中寻找 该字母是否有对应值（映射），如果有就去查该映射的值是否与另一个字符串中对应位字母相同，
如果不同就不是同构字符串，如果该字母没有对应值就把该字母的对应值（另一个字符串对应位的字母）添加到map中即可。
但是如果就是这样的话对于ab, aa就会出错，因为a对于a, b也对应a, 这样就对应到相同的字母中了。所以我们可以采用相互对应，即创建两个map，
上面的操作为对方执行一次，这样就可以避免对应的相同的字母中了。*/
class Solution {
public:
	bool isIsomorphic(string s, string t) {
		unordered_map<char, char>smap;
		unordered_map<char, char>tmap;
		for (int i = 0; i < s.length(); i++)
		{
			if (smap.count(s.at(i)) && smap[s.at(i)] != t.at(i))
				return false;
			if (tmap.count(t.at(i)) && tmap[t.at(i)] != s.at(i))
				return false;
			smap[s.at(i)] = t.at(i);
			tmap[t.at(i)] = s.at(i);
		}
		return true;
	}
};