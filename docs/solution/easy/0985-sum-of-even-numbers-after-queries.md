# 0985 查询后的偶数和


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html)

来源：[LeetCode](https://leetcode.com/problems/sum-of-even-numbers-after-queries/)  [力扣](https://leetcode-cn.com/problems/sum-of-even-numbers-after-queries/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0985-sum-of-even-numbers-after-queries.js)






## 题目描述

给出一个整数数组 A 和一个查询数组 queries。

对于第 i 次查询，有 val = queries[i][0], index = queries[i][1]，我们会把 val 加到 A[index] 上。然后，第 i 次查询的答案是 A 中偶数值的和。

（此处给定的 index = queries[i][1] 是从 0 开始的索引，每次查询都会永久修改数组 A。）

返回所有查询的答案。你的答案应当以数组 answer 给出，answer[i] 为第 i 次查询的答案。


示例 1:

```
输入：A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
输出：[8,6,2,4]
解释：
开始时，数组为 [1,2,3,4]。
将 1 加到 A[0] 上之后，数组为 [2,2,3,4]，偶数值之和为 2 + 2 + 4 = 8。
将 -3 加到 A[1] 上之后，数组为 [2,-1,3,4]，偶数值之和为 2 + 4 = 6。
将 -4 加到 A[0] 上之后，数组为 [-2,-1,3,4]，偶数值之和为 -2 + 4 = 2。
将 2 加到 A[3] 上之后，数组为 [-2,-1,3,6]，偶数值之和为 -2 + 6 = 4。
```


提示：

- 1 <= A.length <= 10000
- -10000 <= A[i] <= 10000
- 1 <= queries.length <= 10000
- -10000 <= queries[i][0] <= 10000
- 0 <= queries[i][1] < A.length


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/sum-of-even-numbers-after-queries/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  const answer = [];
  const start = A.filter(a => a % 2 === 0).reduce((prev, next) => prev + next, 0);
  let ans = start;
  for (let i = 0; i < queries.length; i++) {
    const index = queries[i][1];
    const val = queries[i][0];
    const cur = A[index];
    if (cur % 2 === 0) {
      val % 2 === 0 ? ans += val : ans -= cur;
    } else {
      val % 2 === 0 ? ans = ans : ans += cur + val;
    }
    A[index] += val;
    answer.push(ans);
  }
  return answer;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
