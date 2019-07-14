# 443 压缩字符串

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/string-compression/)  [力扣](https://leetcode-cn.com/problems/string-compression/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/StringCompression.js)

:::



## 题目描述

给定一组字符，使用原地算法将其压缩。压缩后的长度必须小于或等于原数组长度。数组的每个元素应该是长度为 1 的字符。在完成原地修改输入数组后，返回数组的新长度。能否仅用 O(1) 的空间复杂度解决问题？

示例如下：

```
输入：["a","a","b","b","c","c","c"]
输出：返回6，输入数组的前6个字符应该是：["a","2","b","2","c","3"]
说明："aa"被"a2"替代。"bb"被"b2"替代。"ccc"被"c3"替代。


输入：["a"]
输出：返回1，输入数组的前1个字符应该是：["a"]
说明：没有任何字符串被替代。


输入：["a","b","b","b","b","b","b","b","b","b","b","b","b"]
输出：返回4，输入数组的前4个字符应该是：["a","b","1","2"]。
说明：由于字符"a"不重复，所以不会被压缩。"bbbbbbbbbbbb"被“b12”替代。
注意每个数字在数组中都有它自己的位置。
```



## 解题思路

本题要求使用原地算法，也就是说我们要在 chars 输入数组本身来更改。根据示例，这里 chars 中的字符是有序的，那么我们可以利用两个指针，一段一段地数出某一个字符的数量。这里注意，字符的数量中的每一位数字都要占一个位置，比如 12，要将 '1' 和 '2' 加入 chars，而不是 '12'。加入后，再将之后的字符串往前移动。


```js
var compress = function(chars) {
  let count = 0, p = 0;
  for (let i = 0; i < chars.length; i++) {
    count += 1;
    chars[p] = chars[i];
    if (i === chars.length - 1 || chars[i + 1] !== chars[p]) {
      if (count <= 1) p += 1;
      else {
        chars[p++] = chars[i];
        const scount = (count + '').split('');
        for (let j = 0; j < scount.length; j++) {
          chars[p++] = scount[j];
        }
      }
      count = 0;
    }
  }
  return p;
};
```



## 相关推荐

我为你挑选的关于[字符串](/art/string.html)的题目：

- [100]()
- [111]()
