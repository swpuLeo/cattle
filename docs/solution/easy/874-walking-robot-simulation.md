---
sidebar: auto
---

# 874 模拟机器人行走

::: tip 关于题目

难度：[简单](/solution/easy/)

分类：[贪心算法](/art/greedy.html)

来源：[LeetCode](https://leetcode.com/problems/walking-robot-simulation/)  [力扣](https://leetcode-cn.com/problems/walking-robot-simulation/)

源码：[JS 版本](https://github.com/swpuLeo/cattle/blob/master/src/easy/WalkingRobotSimulation.js)

:::



## 题目描述

机器人在一个无限大小的网格上行走，从点（0,0）处开始出发，面向北方。该机器人可以接收以下三种命令：

- -2：向左转 90 度

- -1：向右转 90 度

- 1 ≤ x ≤ 9：向前移动 x 个单位长度

在网格上有一些格子被视为障碍物。第 i 个障碍物位于网格点（obstracles[i][0], obstracles[i][1]）。如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可继续该路线的其余部分。

返回机器人行进过程中与原点最大的欧氏距离的平方。

示例如下：

```
输入: commands = [4,-1,3], obstacles = []
输出: 25
解释: 机器人将会到达 (3, 4)


输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
输出: 65
解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处
```

提示：
- 0 ≤ commands.length ≤ 10000；
- 0 ≤ obstracles.length ≤ 10000；
- -30000 ≤ obstracles[i][0] ≤ 30000；
- -30000 ≤ obstracles[i][1] ≤ 30000；
- 答案保证小于 2³¹。


## 解题思路

这个题涉及到贪心算法。贪心算法是一种算法思想，并没有具体的实现步骤。贪心算法的思想是在每一次选择时，都选择当前最有利的，以期望整体结果最优。

本题中，我们期望的结果是机器人行走过程中与原点的最大欧式距离，那么就是要让机器人尽可能地远离原点。在行走过程中，遇到的限制是障碍物会阻挡机器人的前进，而停下来。

所以根据贪心算法，就是对机器人的下一步做预判（选择），如果是障碍物就停下来，否则前进。

在具体实现的时候，本题需要注意的地方：一是我们需要构造常量来保存机器人移动的单位长度对应的坐标变化，通常 x 轴以东方为正，y 轴以北方为正，那么往东前进一个单位长度可以表示为 (1, 0)，同理往北为 (0, 1)，往南为 (0, -1)，往西为（-1, 0）。

二是我们需要一个变量来保存机器人当前的朝向，以及根据这个朝向来选择坐标变化组。

三是对 JS 来说，obstracles 参数是一个二维数组，比如 [[2, 4]]，在机器人前进过程中，我们需要对每一步进行障碍物判断，但是由于 JS 中不能进行引用类型的相等判断（举例：[2, 4] 和 [2, 4] 在 JS 中判断为不等，false）。所以，需要对 obstracles 进行额外处理。我的思路是将其转换为字符串，具体请参考下方的实现。

```js
var robotSim = function(commands, obstacles) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let face = 0; // 0 - N, 1 - E, 2 - S, 3 - W
  let x = 0, y = 0;
  let max = 0;
  let map = {};
  obstacles.forEach(obs => {
    map[obs.toString()] = 1;
  });
  commands.forEach(cmd => {
    if (cmd === -1) face = (face + 1) % 4;
    else if (cmd === -2) face = (face + 3) % 4;
    else {
      for (let i = 0; i < cmd; i++) {
        if (`${x + dx[face]},${y + dy[face]}` in map) break;
        else {
          x += dx[face];
          y += dy[face];
        }
      }
    }
    max = Math.max(max, x * x + y * y);
  });
  return max;
};
```



## 相关推荐

我为你挑选的[贪心算法](/art/greedy.html)题目：
