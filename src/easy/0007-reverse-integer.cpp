/* 思路：首先判断正负号，然后取绝对值，对每一位取余再作为一个数插入到需要返回的值中，
注意 要每次判断是否超过了32位，只需要向右移31位 如果超过了 那么就不为0.
*/

class Solution {
public:
	int reverse(int x) {
		int flag = x >> 31;//判断是否为负
		long long num = x;//避免直接取绝对值溢出
		if (flag) num = -num;
		long long sum = 0;
		int temp = 0;
		while (num != 0)
		{
			temp = num % 10;
			sum = sum * 10 + temp;
			if (sum >> 31 > 0) return 0;
			num /= 10;
		}
		if (flag != 0) sum = -sum;
		return sum;
	}
};