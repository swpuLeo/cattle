/*思路：采取一边插入哈希表一边寻找一边在已经插入的哈希表中寻找的方式，
每次都拿着即将插入哈希表的数字然后在哈希表中找是否存在剩下的那个函数。
有人可能会问，在循环里面查找的话时间复杂度不就变高了嘛，
但是哈希表查找时间可以说是o(1)是常数（避免冲突的算法采用链地址可能不为o(1)，但一般不用链地址来避免冲突），
所以总的时间复杂度就为o(n)，哈希表就是一种用空间换取时间的算法。*/
class Solution {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
    vector<int> res;
    unordered_map<int, int> hash;//由于unorder_map速度要比map快所以选择无序哈希表  
    for (int i = 0; i < nums.size(); ++i) {
      int another = target - nums[i];
      if (hash.count(another)) {
        res = vector<int>({ hash[another], i });
        return res;
      }
      hash[nums[i]] = i;
    }
    return res;
  }
};
