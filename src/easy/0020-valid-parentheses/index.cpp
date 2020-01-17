/s* 思路：此题关键就是栈的利用，依次便利数组，对于(, [, { 就只需要入栈，对于),], }就要进行判断，
是否是对应的另一半，如果不是就一定不匹配以为[(])这种就是无效的，并且注意，最后要判断是否为空，
"["无效括号。*/
class Solution {
public:
	bool isValid(string s) {
		stack<char>st;
		for (int i = 0; i < s.length(); i++)
		{
			switch (s.at(i))
			{
			case '(':
			case '[':
			case '{':
				st.push(s.at(i));
				break;
			case ')':
				if (st.empty() || st.top() != '(') return false;
				st.pop(); break;
			case ']':
				if (st.empty() || st.top() != '[') return false;
				st.pop(); break;
			case '}':
				if (st.empty() || st.top() != '{') return false;
				st.pop(); break;
			}
		}
		return st.empty();
	}
};
