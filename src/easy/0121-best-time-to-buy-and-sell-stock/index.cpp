/* 思路1 分治法：此题可以可以说是最大的连续子数组的和的典型问题，因为我们需要求的是我们在某一时间买股票并在某一时间卖掉股票，
此时我们将原本的数组转化一下，变成一个当天买股票和第二天卖掉股票的一个收入差，此时数组就变成了两天之间的利润差[7, 1, 5, 3, 6, 4]就变成了[-6, 4, -2, 3, -2]，
此时我们只需要求出最大连续子数组和就可以求出最大的利润是多少，当然这样可以用暴力的方法求出所有子数组的和再比较大小，但是这样时间复杂度就为o(n ^ 2)。

所以我们此题可以采用一种分治法的方法，我们可以将数组分为两段，此时的最大的连续子数组一定在前半段，后半段或者跨过中点的数组，
对于存在于前半段或者后半段的的最大连续子数组我们可以再将其对半分割，此时又最大连续子数组和又回到了刚刚的起点，所以这就是一道典型的递归题
（分治法：将一个大问题分割成相同处理方法的小问题，在解决所有子问题之后，就将原本的大问题解决了），
所以此时我们最大的问题就是求跨过中点的最大连续子数组(对于前后段我们就一直分割，知道最后为1个数，就返回这个数就好了)，有人可能有疑问，
这样不就还是得用较高的时间复杂度吗？但事实上如果我们需要求跨过中点的时间复杂度为o(n)，因为，该数组一定要包含中点，所以就可以直接从中点开始求
（先设一个max = 0xffffffff），先从中点往后（右）加，每加一个数字就判断该和是否已经大于了max, 如果大于了max就更新max，最后就求到了中点到末尾的最大子数组，
然后我们只需要使用这个求得的值，再往前加，如果每次加了后都大于max我们就更新max就可，如此一来就求得了跨过中点的最大子数组和，
大家可以看到我们只是把所有数组加了一遍，所以求跨过中点的时间复杂度为o(n)。同时有个小技巧，我们再设一个数要足够小的时候，大家可能记不住int型最小的值为多少，
我们可以写作0xffffffff（16进制）, 我们取得一个整形32位都为1，由于最高位为1表示负，所以就为最小的整形。在面试手写算法忘了可以采用这种表示法。*/
class Solution {
public:
	int findMaxCrossMid(vector<int>&array, int low, int mid, int high)
	{
		int max = 0xffffffff;
		int left, right;
		left = right = 0;
		for (int i = mid; i <= high; i++)
		{
			right += array[i];
			if (right > max) max = right;
		}
		left = max = max > 0 ? max : 0;
		for (int i = mid - 1; i >= low; i--)
		{
			left += array[i];
			if (left > max) max = left;
		}
		return max;
	}
	int findMaxArray(vector<int>&array, int low, int high)
	{
		if (low >= high) return array[low];
		int mid = low + (high - low) / 2;
		int left = findMaxArray(array, low, mid);
		int right = findMaxArray(array, mid + 1, high);
		int cross = findMaxCrossMid(array, low, mid, high);
		return max(left, max(right, cross));
	}
	int maxProfit(vector<int>& prices) {
		if (prices.size() <= 1) return 0;
		vector<int>subarray;
		for (int i = 1; i < prices.size(); i++)
			subarray.push_back(prices[i] - prices[i - 1]);
		int sum = findMaxArray(subarray, 0, subarray.size() - 1);
		return sum > 0 ? sum : 0;
	}
};
/* 思路2 一次遍历：此题我们还可以采取只遍历一次的方法，我们只需要找出数组中的最大差值即可
（注意最大差值是必须大的数在后面，不然[9, 1]这样最大差值为 - 8买股票就亏钱了），
所以我们就只用设两个值min, max每当遇到一个值我们就判断看看是否这个数比min还小，如果还小，
我们就更新这个min，如果这个值比min大那么这个值减去min就一定为正，我们就可以判断是否这两个的差值大于了max如果大于max我们就更新max值即可，
这样遍历完之后就可以找出最大的差值（小的在前，大的在后）, 同时小技巧就是不知道最大值为多少的情况下可以用16进制的0x7fffffff，这个数只有32位中的最高位为0
（最高位为0表示为正）其余全部为1就是最大32整数。这个小技巧在面试也会很好用。*/
class Solution {
public:
	int maxProfit(vector<int>& prices) {
		int max = 0;
		int min = 0x7fffffff;
		for (int i = 0; i < prices.size(); ++i)
		{
			if (prices[i] < min)
				min = prices[i];
			else if (prices[i] - min > max)
				max = prices[i] - min;
		}
		return max;
	}
};