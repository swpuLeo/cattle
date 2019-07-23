/* 思路：此题关键是要理清楚思路，要搞清楚我们每次往字符串中插入的有数字target的个数和数字target.
所以我们需要依次便利字符串，统计相邻的数字相邻的个数，然后一旦相邻的数字不同了，
我们就需要把统计到的个数count和数字target插入字符串，遍历完了要注意最后一个count和target是没有插入的，
我们需要在外部进行插入。最后在把该缓存的字符串复制到我们以前那个字符串中，然后再次遍历即可。
这里面要注意int 和 char之间的转化*/
class Solution {
public:
	string countAndSay(int n) {
		string nums;
		string temp;
		nums.append(1, '1');
		for (int j = 1; j < n; j++)
		{
			int target = nums[0];
			int count = 1 + '0';
			for (int i = 1; i < nums.length(); )
			{
				if (target != nums.at(i))
				{
					temp.append(1, (char)(count));
					temp.append(1, (char)(target));
					count = 1 + '0';
					target = nums.at(i++);
				}
				else { count++; i++; }
			}
			temp.append(1, (char)(count));
			temp.append(1, (char)(target));
			nums = temp;
			temp.clear();
		};
		return nums;
	}
};