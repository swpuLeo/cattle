# 0532 数组中的 K-diff 数对


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 双指针

来源：[LeetCode](https://leetcode.com/problems/k-diff-pairs-in-an-array/)  [力扣](https://leetcode-cn.com/problems/k-diff-pairs-in-an-array/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0532-k-diff-pairs-in-an-array.js)






## 题目描述

给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.


示例 1:

```
输入: [3, 1, 4, 1, 5], k = 2
输出: 2
解释: 数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
尽管数组中有两个1，但我们只应返回不同的数对的数量。
```

示例 2：

```
输入:[1, 2, 3, 4, 5], k = 1
输出: 4
解释: 数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5)。
```

示例 3：

```
输入: [1, 3, 1, 5, 4], k = 0
输出: 1
解释: 数组中只有一个 0-diff 数对，(1, 1)。
```


注意：

- 数对 (i, j) 和数对 (j, i) 被算作同一数对。
- 数组的长度不超过10,000。
- 所有输入的整数的范围在 [-1e7, 1e7]。



::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/k-diff-pairs-in-an-array/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let count = 0;
  nums.sort((a, b) => a - b);
  let last = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (last === cur) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - cur === k) {
        count += 1;
        break;
      }
    }
    last = cur;
  }
  return count;
};
```

思路二

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;
  const set = new Set();
  const res = new Set();
  nums.forEach(item => {
    if (set.has(item + k)) res.add(item + k);
    if (set.has(item - k)) res.add(item);
    set.add(item);
  });
  return res.size;
};
```

思路三

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;
  let count = 0;
  if (k === 0) {
    let index = 0;
    let num = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[index]) {
        num += 1;
      } else if (num) {
        count += 1;
        num = 0;
        index = i;
      }
    }
    if (num) {
      count += 1;
    }
    return count;
  }
  const map = new Map();
  nums.forEach((num, index) => {
    map.set(num, index);
  });
  [...map.keys()].forEach(key => {
    if (map.has(key + k)) count += 1;
  });
  return count;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
