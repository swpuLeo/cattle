# 0017 电话号码的数字组合



## 题目导航

难度：[中等](/solution/medium/)

分类：[字符串](/art/string.html) | [回溯算法](/art/back-tracking.html)

来源：[LeetCode](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)  [力扣](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/medium/0017-letter-combinations-of-a-phone-number.js)





## 题目描述

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

说明：尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

![0017-illustration](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/illustration/0017.png)



示例 1:

```
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```



::: tip 声明 题目来源

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
:::



## 解题思路

思路一：

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  if (!digits) return []
  const res = []
  const processor = (combination, digits) => {
    if (!digits) return res.push(combination)
    const digit = digits[0]
    const letters = map[digit]
    for (let i = 0; i < letters.length; i++) {
      processor(combination + letters[i], digits.slice(1))
    }
  }
  processor('', digits)
  return res
};
```





## 相关推荐

我为你挑选的[字符串](/art/string.html)题目：
