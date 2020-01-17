/* 思路：此题只是一道利用计算机做竖式加法的题，只不过给的不是两个整数，而是两个存着整数的字符串而已，对于一个char型字符a, 由于内部采用ASCII码，
所以我们只需要将其减去‘0’即可转化为真正的整数，对于每一次加法我们需要取出两个字符串对应为的字符再将其转化为对于整数a, b即可然后就可以将其做加法，
只不过由于我们做加法时需要考虑进制上来的值，所以我们还需要加上上一位做加法后进上来的值weight（我们将其初始化为0，为了方便第一次的加法）
然后我们再将其对10取余后在插入到字符串中，同时将其除以10就得到了我们应该再下一位需要进位的值，同时需要注意对于遍历完之后有可能weight还不为0，
比如1 + 9一次循环即可完成但是退出循环后weight还不为0，所以我们最后还需要判断是否还需要进位。*/
class Solution {
public:
	string addStrings(string num1, string num2) {
		int weight = 0;
		int temp = 0;
		string res;
		int a, b;
		for (int i = num1.length() - 1, j = num2.length() - 1; i >= 0 || j >= 0; i--, j--)
		{
			a = b = 0;
			if (i >= 0) a = num1[i] - '0';
			if (j >= 0) b = num2[j] - '0';
			temp = a + b + weight;
			res.push_back((temp % 10 + '0'));
			weight = temp / 10;
		}
		if (weight != 0) res.push_back(weight + '0');
		char t;
		for (int i = 0; i < res.length() / 2; i++)
		{
			t = res[i];
			res[i] = res[res.length() - 1 - i];
			res[res.length() - 1 - i] = t;
		}
		return res;
	}
};
