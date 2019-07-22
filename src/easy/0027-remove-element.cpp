/*思路：此题也可以采取两个索引的方式（i, k），
我们可以想象成每个索引对于一个数组，i对于我们原数组，k对应新数组，
只需要判读i指向的值是否与target相等，如果不相等我们就把他复制到k中然后, i.k都加一。
如果相等就不复制，就仅仅i + 1;
*/
class Solution {
public:
  int removeElement(vector<int>& nums, int val) {
    int k = 0;
    for (int i = 0; i < nums.size(); ++i)
      if (nums[i] != val)
        nums[k++] = nums[i];
    return k;
  }
};
```
