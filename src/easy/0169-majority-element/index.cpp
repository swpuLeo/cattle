/* 思路：此题最为关键的就是注意这里的众数定义是一个数的出现次数大于一半，等于都不行，必须是大于一半，
所以可以这样想如果众数为1，而其他数令为 - 1，则所有数之和一定大于0.
因此，我们可以采取一种类似于同归于尽的方式（Boyer - Moore 投票算法）。
即，我们从头开始令target为目标数字，每找到一个数，我们就令其个数为1，然后遍历之和的数字，如果与之相同则数目加一，
如果不同则数目减一，此时应该注意，减一之后应该判断这个数字的个数是否为0如果为0就说明该数目已经抵消一个数字。
然后重新选择一个目标数字target以此循环，到最后这个target一定为众数。因为数字之间相互抵消，
众数是大于一半的，一个众数抵消一个其他数字也能把其他数字抵消完，最后剩下的一定是众数。
同时应该注意，此题已经告诉众数已经存在，如果没有这个条件还需要在最后再遍历一遍判断target的数目是否过了一半。*/
class Solution {
public:
	int majorityElement(vector<int>& nums) {
		int target = nums[0];
		int count = 1;
		for (int i = 1; i < nums.size(); i++)
			if (nums[i] != target)
			{
				count--;
				if (count == 0)
				{
					target = nums[i];
					count = 1;
				}
			}
			else count++;
		return target;
	}
};