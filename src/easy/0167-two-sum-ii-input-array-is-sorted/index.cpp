* 思路：此题由于是一个有序数组，所以只需要从两端同时进行遍历即可，如果前面的元素加上后面的元素等于目标元素即找到答案；若之和小于目标元素，则需要增大值才行，所以前面的索引 + 1；反之，则过大，后面的索引 - 1；同时应该注意，我们判断之和是否为目标元素的时候可以用减法，因为可能出现越界的情况；
```
class Solution {
public:
  vector<int> twoSum(vector<int>& numbers, int target) {
    vector<int>res;
    int begin = 0;
    int end = numbers.size() - 1;
    while (begin < end)
      if (numbers[begin] + numbers[end] == target)
      {
        res.push_back(begin + 1);
        res.push_back(end + 1);
        return res;
      }
      else if (numbers[begin] > target - numbers[end]) end--;
      else begin++;
    return res;
  }
};
```
