/* 思路：此题需要明白什么叫这道题的一个单词，就是对于一个一前一后都被空格所隔开的就是单词（第一个和最后一个可以看成自带一个空格），这样的好处就是，
我们不关心一个单词里面有什么东西，我们只关心是不是先读一个空格然后再读一个空格，如果是就代表着一个空格，那如何可以快速找出判断是不是有一前一后的两个空格呢，
我们只需要设置一个标致mark(bool型)，mark为true就代表着已经读到了一个空格，mark为False就意味着没有读到空格，
我们只需要每次读到一个不为空格的值再判断mark是否为true(是否刚刚已经读了一个空格)如果都满足我们就count加一，并且把空格置为false，
代表着这个单词找完了，需要找下一个单词了，但是如果mark不为true就代表着先前没有读到空格，这个空格是一个单词前面那个，所以此时只需要把mark置为true即可，
同时我们需要把mark置为true, 为了读第一个单词的时候假定前面也有一个空格*/
class Solution {
public:
	int countSegments(string s) {
		bool mark = true;
		int count = 0;
		for (int i = 0; i < s.length(); i++)
		{
			if (s[i] != ' '&&mark) { count++; mark = false; }
			else if (s[i] == ' ') mark = true;
		}
		return count;
	}
};