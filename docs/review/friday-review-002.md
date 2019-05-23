# 第 2 周 - 哈希表


![Friday Review 002](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/review/fr-002.jpg)


Hello，我是 Leo。

每周五，我将对本周的 [LeetCode 计划](/plan/monday-plan-002.html) 进行复盘。



## 总结

本周话题是 [哈希表](/art/hash.html) ，一共 7 个题目。



### 哈希表简述

本周的哈希表题目，更多的是在利用哈希表的特性：对哈希表进行操作（查询、添加、删除）都具有 O(1) 的时间复杂度。为什么呢？下面我来总结一下。

我们知道**数组可按照下标进行随机访问**，时间复杂度为 O(1)。哈希表就利用了数组这种特性。比如现在有学号 `150101~150130` 的学生，现在我要查询学号为 `150109` 的学生的信息。遍历？时间复杂度为 O(n)。

哈希表是怎样做的？

在这里，哈希表通过将学号映射为数组的下标：

```js
// 取学号最后两位
function hash(key) {
  return +key.slice(-2) - 1;
}
```

我们将学号称为键值，映射的过程通过一个哈希函数来帮助完成，哈稀函数计算得到的值称为哈希值。

通过上面的转换，学号 `150101~150130` 都转换成了 `0~29` 的下标，现在我要查询 `150109` 的信息，就会去访问下标为 `8` 的数组项，时间复杂度为 O(1)。

现在有学号 `150101~150130` 和 `150201~150230`，如果再按照上面的哈希函数来处理，就会出现冲突，`150101` 和 `150201` 的下标都是 `0`。我们可以通过更换哈希函数来重新计算更优的哈希值，但是几乎是没办法找到完美的哈希函数的，即便能找到，成本也过高。

所以，如果不能从源头避免，那就从结果来处理。即出现了冲突怎么办？

这里有两种方式，一是开放寻址法，二是链表法。

开放寻址的基本思想是如果出现冲突，那么就在这个位置之后找到一个空闲位置，可以依次判断，也可以按照 `1，2^2，3^2 ...` 这样的步长往后面判断。

链表法就是说存储的数组的每一个位置都存放一个链表头，如果得到的哈希值相同就放入到相同位置的链表中，插入链表的时间复杂度为 O(1)。对于删除和查询来说，时间复杂度为 O(k)，k 为链表的长度，k = n / m（n 为哈希表中数据的个数，m 为哈希表中的位置个数），对于分布比较均匀的哈希表来说，k 可认定为一个常数，即 O(1)。



### JS 中的哈希表

JavaScript 中的有两种使用哈希表的方式，一是对象，二是 `Map`。

操作对象：

```js
const obj = {}

obj['key'] = 'value'
// or
obj.key = 'value'

delete obj[key]
```



`Map` 是 ES6 新增的数据结构，类似于对象，也是键值对的集合，但是键的范围不限于字符串。我们来操作一个 `Map`：

```js
const map = new Map()

map.get() // 查询，返回 key 所映射的值
map.set() // 添加 or 修改
map.has() // 查询，返回一个布尔值
map.delete() // 删除

map.clear() // 清空
map.size // Map 结构的成员总数
```



对于一个对象迭代它的方式是：

```
for (key in obj) {}
```



对于 `Map` 来说，迭代的方式有：

```js
map.keys()
map.values()
map.entries()
map.forEach()
```

需要特别注意的是，Map 的遍历顺序就是插入顺序。



来看一个在题目中经常用到的例子：利用哈希表来统计数组中每个数字出现的次数。

```js
const map = {};
arr.forEach(item => {
  if (map[item]) {
    map[item] += 1;
  } else {
    map[item] = 1;
  }
});
```



## 题目解析

点击下方每个题目，可直接跳转至题目解析：

[500 键盘行](/solution/easy/500-keyboard-row.html)

[575 分糖果](/solution/easy/575-distribute-candies.html)

[594 最长和谐子序列](/solution/easy/594-longest-harmonious-subsequence.html)

[599 两个列表的最小索引总和](/solution/easy/599-minimum-index-sum-of-two-lists.html)

[645 错误的集合](/solution/easy/645-set-mismatch.html)

[690 员工的重要性]()

[720 词典中最长的单词](/solution/easy/720-longest-word-in-dictionary.html)
