/* 思路：此题就是一道典型的查找题，题目要求我们需要在一个特定的范围里面找出一个特定的数，所以这又是一道典型的二分法的题目，即每次用中间的数进行比较，
如果中间的那个位置的过大，则舍去后面一半，如果过小则舍去前面一半，然后再次比较即可，对于int guess(int num); ，大家大可不必管他，他里面就是一个比较函数而已。*/
class Solution {
public:
	int guessNumber(int n) {
		int begin = 1;
		int end = n;
		while (begin <= end)
		{
			int mid = begin + (end - begin) / 2;
			if (guess(mid) == 0)return mid;
			else if (guess(mid) > 0) begin = mid + 1;
			else end = mid - 1;
		}
		return -1;
	}
};