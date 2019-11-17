/* 思路：此题只需要一个字符一个字符遍历即可，我们首先定义char target和 int count用于存贮当前应该存入的字符和字符个数。我们依次遍历字符，当遍历到一样的就进行count加一操作，
如果遍历到不为一样的，那么这个时候我们就应该把当前target和count放入原来的字符串中，大家完全不用担心会覆盖后面没有遍历的字符的问题，因为此题已经简化了，只有count > 1才会放入，
count = 1是不会放入count的，这就限制了target至少出现了两次我们才会放入两个字符，这个刚刚好，完全没有覆盖后面的字符，而对于count = 1我们就只放入了target这样 取出一位，
又放入一位这样也没有覆盖后面的字符，而对于count > 2而言，那取出的位数一定大于我们重新放进去的位数，所以此题不必担心字符覆盖的问题。此题还需要注意就是count > 9
的时候我们需要把数字转化为字符再进行存入字符。我们采用除10取余的方法转化数字与字符会导致放入的数字是逆序的，所以还需要一个小的翻转。*/
class Solution {
public:
	void insetNum(vector<char>&chars, int num, int& index)
	{
		int begin = index;
		while (num != 0)
		{
			chars[index++] = num % 10 + '0';
			num /= 10;
		}
		int end = index - 1;
		while (begin < end)
		{
			int temp = chars[begin];
			chars[begin] = chars[end];
			chars[end] = temp;
			begin++;
			end--;
		}

	}
	int compress(vector<char>& chars) {
		char target = chars[0];
		int count = 1;
		int index = 0;
		for (int i = 1; i < chars.size(); i++)
		{
			if (chars[i] != target)
			{
				chars[index++] = target;
				target = chars[i];
				if (count != 1) insetNum(chars, count, index);
				count = 1;
			}
			else count++;
		}
		chars[index++] = target;
		if (count != 1) insetNum(chars, count, index);
		return index;
	}
};
