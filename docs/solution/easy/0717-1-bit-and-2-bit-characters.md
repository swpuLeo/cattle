# 0717 1比特与2比特字符


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/1-bit-and-2-bit-characters/)  [力扣](https://leetcode-cn.com/problems/1-bit-and-2-bit-characters/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0717-1-bit-and-2-bit-characters.js)






## 题目描述

有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。

现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。


示例 1:

```
输入: bits = [1, 0, 0]
输出: True
解释: 唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。
```

示例 2：

```
输入: bits = [1, 1, 1, 0]
输出: False
解释: 唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。
```


注意:
- 1 <= len(bits) <= 1000.
- bits[i] 总是0 或 1.


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/1-bit-and-2-bit-characters/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  if (bits.length < 2) return true;
  let count = 0;
  for (let i = bits.length - 2; i >= 0; i--) {
    if (bits[i] === 1) count += 1;
    if (bits[i] === 0) break;
  }
  return count % 2 === 0;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
