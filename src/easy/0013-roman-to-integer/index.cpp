/*思路：依次便利字符串即可，只不过每次遍历到'I','X','C'需要再往后遍历一位，以确认是否是特殊的匹配。*/
class Solution {
public:
	int romanToInt(string s) {
		int sum = 0;
		for (int i = 0; i < s.length(); i++)
		{
			switch (s[i])
			{
			case 'I':
				sum += 1;
				if (i < s.length() - 1)
					if (s[i + 1] == 'V') { sum += 4 - 1; i++; }
				if (s[i + 1] == 'X') { sum += 9 - 1; i++; }
				break;
			case 'V':
				sum += 5;
				break;
			case 'X':
				sum += 10;
				if (i < s.length() - 1)
					if (s[i + 1] == 'L') { sum += 40 - 10; i++; }
				if (s[i + 1] == 'C') { sum += 90 - 10; i++; }
				break;
			case 'L':
				sum += 50;
				break;
			case 'C':
				sum += 100;
				if (i < s.length() - 1)
					if (s[i + 1] == 'D') { sum += 400 - 100; i++; }
				if (s[i + 1] == 'M') { sum += 900 - 100; i++; }
				break;
			case 'D':
				sum += 500;
				break;
			case 'M':
				sum += 1000;
				break;
			}
		}
		return sum;
	}
};