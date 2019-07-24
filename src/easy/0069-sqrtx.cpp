/* 思路：此题的总体思路就是找出相邻的两个数a, b a ^ 2 <= target <= b ^ 2即可得出平方根四舍五入之后为a.
所以我们可以一位一位的判断，但是这样效率不高t(n) = n / 2; 
我们可以采用二分查找的方式来进行查找这样就t(n) = lgn; 
但是二分查找中需要注意如果没有在循环中得出结果（也就数不为整数平方根），
我们最后返回的应该是end或者为begin - 1因为最后跳出循环的时候end < begin（a, b相邻），
此时的end就相当于上面的a, begin就相当于上面的b，由上面的结论此时a或者b - 1才是target的整数平方根，
所以应该返回end或者begin - 1；*/
	class Solution {
	public:
		int mySqrt(int x) {
			if (x <= 1) return x;
			int begin = 1;
			int end = x;
			int mid;
			int temp;
			while (begin <= end)
			{
				mid = begin + (end - begin) / 2;
				int temp = x / mid;
				if (mid == temp)
					return mid;
				else if (mid > temp) end = mid - 1;
				else begin = mid + 1;
			}
			return begin - 1;//end
		}
};