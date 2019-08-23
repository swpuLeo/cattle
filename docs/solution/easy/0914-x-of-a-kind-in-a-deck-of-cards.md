# 0914 卡牌分组


## 题目导航

难度：[简单](/solution/easy/)

分类：[数组](/art/array.html) | 数学

来源：[LeetCode](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/)  [力扣](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)

源码：[JS 版本](https://github.com/swpuLeo/leetcode/blob/master/src/easy/0914-x-of-a-kind-in-a-deck-of-cards.js)






## 题目描述

给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

- 每组都有 X 张牌。
- 组内所有的牌上都写着相同的整数。

仅当你可选的 X >= 2 时返回 true。


示例 1:

```
输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
```

示例 2：

```
输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。
```

示例 3：

```
输入：[1]
输出：false
解释：没有满足要求的分组。
```

示例 4：

```
输入：[1,1]
输出：true
解释：可行的分组是 [1,1]
```

示例 5：

```
输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]
```


提示：

- 1 <= deck.length <= 10000
- 0 <= deck[i] < 10000


::: tip 声明 题目来源
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
:::



## 解题思路


思路一

```js
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const map = new Map();
  deck.forEach(item => {
    if (map.has(item)) map.set(item, map.get(item) + 1);
    else map.set(item, 1);
  });
  let min = map.get(deck[0]);
  for (let key of map.keys()) {
    if (map.get(key) < min) min = map.get(key);
  }
  if (min < 2) return false;
  for (let key of map.keys()) {
    let val = map.get(key);
    if (val !== min) {
      let tmp = min;
      let ret = 0;
      while ((ret = val % tmp) !== 0) {
        val = min;
        tmp = ret;
      }
      if (tmp === 1) return false;
    }
  }
  return true;
};
```





## 相关推荐

我为你挑选的[数组](/art/array.html)题目：
