# 0984 不含 AAA 或 BBB 的字符串



## 题目导航

难度：[简单](/solution/easy/)

分类：[贪心算法](/art/greedy.html)

来源：[LeetCode](https://leetcode.com/problems/string-without-aaa-or-bbb/)  [力扣](https://leetcode-cn.com/problems/string-without-aaa-or-bbb/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/0984-string-without-aaa-or-bbb.js)



## 题目描述

给定两个整数 A 和 B，返回任意字符串 S，要求满足：

- S 的长度为 A + B，且正好包含 A 个 'a' 字母和 B 个 'b' 字母；
- 子串 'aaa' 不出现在 S 中；
- 子串 'bbb' 不出现在 S 中。


示例 1:

```
输入：A = 1, B = 2
输出："abb"
解释："abb", "bab" 和 "bba" 都是正确答案。

```

示例 2:

```
输入：A = 4, B = 1
输出："aabaa"
```

注意:
- 0 ≤ A ≤ 100
- 0 ≤ B ≤ 100
- 对于给定的 A 和 B，保证存在满足要求的 S


## 解题思路

思路一

这个题也被归为贪心算法。贪心算法是一种算法思想，没有具体的实现步骤。它的思想是每一步选择都选择当前最优的，以期望最终结果最优。

现在来分析一下本题需要做什么。题目的大意是给定 A 个 'a' 和 B 个 'b'，拼接一个字符串 S，并且 S 中不含 'aaa' 和 'bbb'。第一，我们应该选择当前数量多的字符，比如 A = 4，B = 2，应该先选 A，这样将剩下 3 个 'a' 和 2 个 'b'，会更加平衡，越不可能在后续出现 'aaa' 或 'bbb'。第二，就一定是每次都选最多的吗？考虑这样一种情况，我们已经有 'aa' 了，此时 A = 6，B = 4，如果选择多的，那么此刻还应选择 'a'，但是就会构成 'aaa'。这时，我们应该用两个变量来记录连续 'a' 和连续 'b' 的数量，并在作出选择时考虑它们的值是否小于 2。

```js
var strWithout3a3b = function(A, B) {
  let res = '';
  let a = 0, b = 0;
  while (A + B) {
    if ((A > B && a < 2) || b === 2) {
      res += 'a';
      A -= 1;
      a += 1;
      b = 0;
    } else {
      res += 'b';
      B -= 1;
      b += 1;
      a = 0;
    }
  }
  return res;
};
```

还有一种解法，供参考。

```js
var strWithout3a3b = function(A, B) {
  let a = 'a', b = 'b';
  if (A > B) {
    [A, B] = [B, A];
    [a, b] = [b, a];
  }
  if (2 * A > B) return (b + b + a).repeat(B - A) + (b + a).repeat(2 * A - B);
  else return (b + b + a).repeat(A) + b.repeat(B - 2 * A);
};
```



## 相关推荐

我为你挑选的[贪心算法](/art/greedy.html)题目：
