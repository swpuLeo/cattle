# 0682 棒球比赛


## 题目导航

难度：[简单](/solution/easy/)

分类：[栈](/art/stack.html)

来源：[LeetCode](https://leetcode.com/problems/baseball-game/)  [力扣](https://leetcode-cn.com/problems/baseball-game/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0682-baseball-game.js)






## 题目描述

你现在是棒球比赛记录员。
给定一个字符串列表，每个字符串可以是以下四种类型之一：
1. 整数（一轮的得分）：直接表示您在本轮中获得的积分数。
2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
你需要返回你在所有回合中得分的总和。

示例 1：

```
输入: ["5","2","C","D","+"]
输出: 30
解释:
第1轮：你可以得到5分。总和是：5。
第2轮：你可以得到2分。总和是：7。
操作1：第2轮的数据无效。总和是：5。
第3轮：你可以得到10分（第2轮的数据已被删除）。总数是：15。
第4轮：你可以得到5 + 10 = 15分。总数是：30。
```

示例 2：

```
输入: ["5","-2","4","C","D","9","+","+"]
输出: 27
解释:
第1轮：你可以得到5分。总和是：5。
第2轮：你可以得到-2分。总数是：3。
第3轮：你可以得到4分。总和是：7。
操作1：第3轮的数据无效。总数是：3。
第4轮：你可以得到-4分（第三轮的数据已被删除）。总和是：-1。
第5轮：你可以得到9分。总数是：8。
第6轮：你可以得到-4 + 9 = 5分。总数是13。
第7轮：你可以得到9 + 5 = 14分。总数是27。
```


注意:

- 输入列表的大小将介于1和1000之间。
- 列表中的每个整数都将介于-30000和30000之间。



::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/baseball-game
:::



## 解题思路


思路一

```js
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const stack = [];
  let sum = 0;
  let score = 0;
  for (let op of ops) {
    if (!isNaN(Number(op))) {
      stack.push(Number(op));
      sum += Number(op);
    } else if (op === 'C') {
      score = stack.pop();
      sum -= score;
    } else if (op === 'D') {
      score = stack[stack.length - 1] * 2;
      stack.push(score);
      sum += score;
    } else if (op === '+') {
      score = stack[stack.length - 2] + stack[stack.length - 1];
      stack.push(score);
      sum += score;
    }
  }
  return sum;
};
```





## 相关推荐

我为你挑选的[栈](/art/stack.html)题目：
