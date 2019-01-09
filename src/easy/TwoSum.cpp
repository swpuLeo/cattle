class Solution {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
    vector<int> res;
    map<int, int> map;
    for (int i = 0; i < nums.size(); i++) {
      int cur = nums[i];
      int diff = target - cur;
      if (map.count(diff) != 0) {
        res.push_back(map[diff]);
        res.push_back(i);
        return res;
      }
      map[cur] = i;
    }
  }
};