# 0038 报数

## 题目导航

难度：[简单](/solution/easy/)

分类：[字符串](/art/string.html)

来源：[LeetCode](https://leetcode.com/problems/count-and-say/)  [力扣](https://leetcode-cn.com/problems/count-and-say/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0038-count-and-say.js)



## 题目描述

报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

```
1.     1
2.     11
3.     21
4.     1211
5.     111221
```

`1` 被读作  `"one 1"`  (`"一个一"`) , 即 `11`。
`11` 被读作 `"two 1s"` (`"两个一"`）, 即 `21`。
`21` 被读作 `"one 2"`,  "`one 1"` （`"一个二"` ,  `"一个一"`) , 即 `1211`。

给定一个正整数 *n*（1 ≤ *n* ≤ 30），输出报数序列的第 *n* 项。

注意：整数顺序将表示为一个字符串。

示例：

```
输入: 1
输出: "1"

输入: 4
输出: "1211"
```

::: tip 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/count-and-say
:::



## 解题思路

思路一：

```js
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  function interpret(s, accum, sum) {
    var times = 1;
    var num = s.charAt(0);
    var len = s.length;
    var result = '';

    for (var i = 1; i < len; i++) {
      if (s.charAt(i) !== num) {
        result += times + num;
        num = s.charAt(i);
        times = 1;
      } else {
        times++;
      }
    }
    if (accum === 1) {
      result = '1';
    } else {
      result += times + num;
    }
    if (accum === sum) {
      return result;
    } else {
      return interpret(result, accum + 1, sum);
    }
  }
  return interpret('1', 1, n);
};
```



## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
