# 第 1 周 - 字符串


![Friday Review 001](https://w3fun-1253290453.cos.ap-chengdu.myqcloud.com/cattle/review/fr-001.jpg)


Hello，我是 Leo。

每周五，我将对本周的 [LeetCode 计划](/plan/monday-plan-001.html) 进行复盘。



## 总结

本周话题是 [字符串](/art/string.html) ，一共 10 个题目。这 10 个题目基本上是对字符串进行操作，我总结了一些问题，如下。

### 判断大写字母

如何判断一个字母是大写字母？

:star: 方案一：使用 `charCodeAt()`。JavaScript 字符串的 `charCodeAt()` 方法会默认返回第一个字符的 ASCII 码。

```js
'A'.charCodeAt() === 65
'Z'.charCodeAt() === 90

// 所以可以写一个函数来判断
const isUpperCase = char => {
  const code = char.charCodeAt();
  return code >= 65 && code <= 90;
}
```

注：小写字母的 ASCII 码范围为 97 - 122。

方案二：使用 `toUpperCase()`。JavaScript 字符串的 `toUpperCase()` 方法会将字符转换为大写。

```js
const isUpperCase = char => char === char.toUpperCase();
```

但是，这种方法有局限性，对于非字母也会返回 `true`。仅限于题目中声明输入只包含字母时使用。

:star: 方案三：使用正则表达式。

```js
const isUpperCase = char => /[A-Z]/.test(char);
```

如果判断所有字母都是大写字母，可以这样写：

```js
const isAllUpperCase = word => /^[A-Z]+$/.test(word);
```



### 反转字符串

反转字符串可以使用循环或者双指针的思路来解决。在 JavaScript 中，还可以使用数组和字符串的内置方法来完成：

```js
'abc'.split('').reverse().join('') === 'cba' // true
```

来看看本周遇到的「花式反转」：

「花式反转」第 1 式：将字符串的每 2k 个字符的前 k 个字符进行反转（k 为整数）。

```js
// 举例
// 输入: s = "abcdefg", k = 2
// 输出: "bacdfeg"

// 实现
for (let i = 0; i < s.length; i += 2 * k) {
  res += s.slice(i, i + k).split('').reverse().join('') + s.slice(i + k, i + 2 * k);
}
```

「花式反转」第 2 式：反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

```js
// 举例
// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc"

// 实现
s.split(' ').map(item => item.split('').reverse().join('')).join(' ');
```

总的来看，都离不开最最基础的字符串反转操作。



### `split(' ')`

你知道如果包含多个连续空格的字符串执行 `split(' ')` 操作会怎样吗？

```js
// 下面这个字符串包含 3 个连续空格
// 结果是有 2 个空格会被分割为空字符串
'ab   c'.split(' ')  // ["ab", "", "", "c"]
```

要解决这种情况，注意不能使用 `trim()`，这个方法只能去除字符串首尾的空格：

```js
' ab   c  '.trim()  // 'ab   c'
```

不能从源头来处理，那么就处理结果，利用数组的 `filter` 过滤：

```js
'ab   c'.split(' ').filter(item => item)  // ["ab", "c"]
```

扩展：如果被分割的字符在字符串中的首尾，那么首尾有 x 个相同字符就会产生 x 个空字符串；如果是在字符串中部位置，那么会产生 x - 1 个空字符串。

```js
',,c,,a,,'.split(',')  // ["", "", "c", "", "a", "", ""]
```



### 如何在 Map 中找到 value 最大的 key ？

```js
/* 这是一个 Map 结构
{
	'a' => 5,
	'b' => 1,
	'c' => 7,
	'd' => 3
}
*/
```

方案一：迭代

```js
let max = 0;
let ans = ''
for (const key of map) {
  // key 的结构在这里是 ['a', 5]
  if (key[1] > max) {
    max = key[1];
    ans = key[0];
  }
}
```

方案二：使用 `sort()`

```js
const ans = [...map.entries()].sort((a, b) => a[1] - b[1])
// [...map.entries()] 的结构为
// [['a', 5], ['b', 1], ['c', 7], ['d', 3]]

// 排序后的结果为：[['b', 1], ['d', 3], ['a', 5], ['c', 7]]

// 这个 key 值为
ans.pop()[0]
```



### JavaScript 中使用正则表达式

方式一：`replace()`

可以用于替换字符串中的字符，比如 [819 最常见的单词](/solution/easy/819-most-common-word.html) 和 [788 旋转数字](/solution/easy/788-rotated-digits) 都用到了 `replace()` 正则替换。

```js
// 将 s 中所有的 0 1 8 替换为空字符串
s.replace(/0+|1+|8+/g, '')
```



方式二：`match()`

在本周用到的 `match`，是将匹配结果放进一个数组中：

```js
// s = 'hello world'
s.match(/[a-z]+/g) // ["hello", "world"]
```

可以查看 [819 最常见的单词](/solution/easy/819-most-common-word.html)。



方式三：`test()`

`test()` 是返回 `true` 或者 `false`，比如：

```js
// 检测 word 是否是全大写或者全小写或者首字母大写
/(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/.test(word)
```

可以查看 [520 检测大写字母](/solution/easy/520-detect-capital.html)。



## 题目解析

点击下方每个题目，可直接跳转至题目解析：

[520 检测大写字母](/solution/easy/520-detect-capital.html)

[521 最长特殊序列 I](/solution/easy/521-longest-uncommon-subsequence-i.html)

[522 最长特殊序列 II](/solution/medium/522-longest-uncommon-subsequence-ii.html)

[541 反转字符串 II](/solution/easy/541-reverse-string-ii.html)

[551 学生出勤记录 I](/solution/easy/551-student-attendance-record-i.html)

[557 反转字符串中的单词 III](/solution/easy/557-reverse-words-in-a-string-iii.html)

[788 旋转数字](/solution/easy/788-rotated-digits.html)

[804 唯一摩尔斯密码词](/solution/easy/804-unique-morse-code-words.html)

[819 最常见的单词](/solution/easy/819-most-common-word.html)

[824 山羊拉丁文](/solution/easy/824-goat-latin.html)
