# 944 删栏造序

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[贪心算法](/art/greedy.html)

来源：[LeetCode](https://leetcode.com/problems/delete-columns-to-make-sorted/)  [力扣](https://leetcode-cn.com/problems/delete-columns-to-make-sorted/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/DeleteColumnsToMakeSorted.js)

:::



## 题目描述

给定由 N 个小写字符串组成的数组 A，其中每个字符长度相等。选取一个删除索引序列，对于 A 中的每个字符串，删除对应每个索引处的字符。所余下的字符串行从上往下读形成列。

比如，有 A = ['abcdef', 'uvwxyz']，删除索引序列 {0, 2, 3}，删除后 A 为 ['bef', 'vyz']，A 的列为 ['b', 'v']，['e', 'y']，['f', 'z']。形式上，第 n 列为 A[0][n]，A[1][n]，...，A[A.length - 1][n]。

假设，我们选择了一组删除索引 D，那么执行删除操作后，A 中所剩的每一列都必须是非降序排列的，然后请你返回 D.length 的最小可能值。

示例如下：

```
示例 1

输入：["cba", "daf", "ghi"]
输出：1
解释：
当选择 D = {1}，删除后 A 的列为：["c","d","g"] 和 ["a","f","i"]，均为非降序排列。
若选择 D = {}，那么 A 的列 ["b","a","h"] 就不是非降序排列了。


示例 2

输入：["a", "b"]
输出：0
解释：D = {}


示例 3

输入：["zyx", "wvu", "tsr"]
输出：3
解释：D = {0, 1, 2}
```

注意：
- 0 ≤ A.length ≤ 100；
- 0 ≤ A[i].length ≤ 1000


## 解题思路

这个题的题目描述不太清楚，需要仔细读。

对于数组 A 来说，它的每一项都是长度相等的字符串，我把它画到一个平面上来看。

![944-illustration](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/944-illustration.webp)

然后，我们要判断，该平面中所有的列是否是非降序的，如果不是非降序排列的，那么我们就要将其删除。上图给出的列子中，只有第 1 列不是非降序的，所以我们删除的最小可能值为 1，就能使平面剩余的列达到非降序排列。

```js
var minDeletionSize = function(A) {
  const cols = A[0].length;
  const res = [];
  for (let col = 0; col < cols; col++) {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i][col] > A[i + 1][col]) {
        res.push(col);
        break;
      }
    }
  }
  return res.length;
};
```

当然，在本题中，你可不必保留 D 的结构，直接声明一个变量计数即可。

```js
var minDeletionSize = function(A) {
  const cols = A[0].length;
  let count = 0;
  for (let col = 0; col < cols; col++) {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i][col] > A[i + 1][col]) {
        count += 1;
        break;
      }
    }
  }
  return count;
};
```



## 相关推荐

我为你挑选的[贪心算法](/art/greedy.html)题目：
