/* 思路：此题还是一道典型的哈希表的问题，因为我们需要知道某个字母对应什么字符串和某个字符串所对应的字母是什么，
所以一旦题目中需要找什么与什么之间的对应关系的时候就要优先考虑哈希表的使用，我们只需要遍历主字符串，如果遍历到为空格就代表一个单词已经成功的遍历了，
然后我们再去哈希表中判断该字符串对应的字母是否存在，如果存在再判断该字母是否与pattern中当前位是否一致，如果不一致就表示一个字符串映射了多个字母就失败了，
如果不存在就添加进当前单词与当前字母的映射即可，但是仅仅这样做是不够的，因为比如aa, dog cat, 如果仅仅这样的话dog对应的是a, cat也对应的是a,
所以就导致了一个字母映射了多个字符串，所以应该用两个哈希表，我们不仅需要知道字符串与字母的映射关系，还需要知道字母与字符串的映射关系。
同时还需要注意两个字符串没有同时遍历完的情况，同时此题有个小技巧可以在主字符串末尾插入一个空格，因为我们每次遇到空格才会进行映射比较，
但是对于最后一次我们就需要额外在循环外面进行比较，我们如果插入一个空格就可以保证最后读取到一个空格然后马上就开始比较！*/
class Solution {
public:
	bool wordPattern(string pattern, string str) {
		str.push_back(' ');
		unordered_map<char, string> hash;
		unordered_map<string, char> map;
		string temp;
		int index = 0;
		int i = 0;
		for (; i < str.length() && index < pattern.length(); i++)
		{
			if (str.at(i) != ' ')temp.push_back(str.at(i));
			else
			{
				if (hash.count(pattern.at(index)) && map.count(temp))
				{
					if (temp.compare(hash[pattern.at(index)]) != 0 || map[temp] != pattern.at(index)) return false;
				}
				else if (hash.count(pattern.at(index)) || map.count(temp))
					return false;
				else
				{
					hash[pattern.at(index)] = temp;
					map[temp] = pattern.at(index);
				}
				index++;
				temp.clear();
			}
		}
		return index == pattern.length() && i == str.length();
	}
};