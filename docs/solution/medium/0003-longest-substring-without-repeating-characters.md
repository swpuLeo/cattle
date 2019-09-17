# 0003 无重复字符的最长子串



## 题目导航

难度：[中等](/solution/medium/)

分类：[哈希表](/art/hash.html) | 双指针 | [字符串](/art/string.html) |滑动窗口

来源：[LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)  [力扣](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/medium/0003-longest-substring-without-repeating-characters.js)



:::tip 精选

:star: 本题为精选题目。

精选题目具有的特点：

- 详细的图文搭配
- 多语言解法支持（目前支持 JavaScript、C++、Python）
- 解题过程可视化
- 同类题目关联

可以在这里查看所有[精选题目列表](/solution/top/)。

:::





## 题目描述

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。



示例 1:

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```



示例 2:

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```



示例 3:

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
:::



## 解题思路

思路一：

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length <= 1) return 0;
  let i = 0;
  let j = height.length - 1;
  let area = 0;
  while (i < j) {
    let h = Math.min(height[i], height[j]);
    area = Math.max(area, h * (j - i));
    if (height[i] < height[j]) i += 1;
    else j -= 1;
  }
  return area;
};
```



思路二：

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length <= 1) return 0;
  let area = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = 0; j < height.length; j++) {
      area = Math.max(area, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return area;
};
```





## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
