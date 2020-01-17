/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const map = new Map();
  // 使用正则表达式匹配出字母
  paragraph
    .toLowerCase()
    .match(/[a-z]+/g)
    .filter(word => !banned.includes(word))
    .forEach(word => map.set(word, (map.get(word) || 0) + 1));
  // 巧妙利用 sort 的排序方式
  // 根据单词出现的次数升序排列
  // ans 的最后一项为 ['word', count]
  const ans = [...map.entries()].sort((a, b) => a[1] - b[1]);
  return ans.pop()[0];
};


/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const map = new Map();
  // 使用正则替换掉特殊字符
  // 然后根据空格分割
  // 注意这里可能会出现 `多个连续空格的情况`
  // 分割结果会产生空字符串
  // 所以在 filter 中过滤时，比上一种实现，增加了真值判断
  paragraph
    .toLowerCase()
    .replace(/[!?',;.]/g, ' ')
    .split(' ')
    .filter(word => word && !banned.includes(word))
    .forEach(word => map.set(word, (map.get(word) || 0) + 1));
  const ans = [...map.entries()].sort((a, b) => a[1] - b[1]);
  return ans.pop()[0];
};


/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const map = new Map();
  paragraph
    .toLowerCase()
    .replace(/[!?',;.]/g, ' ')
    .split(' ')
    .filter(word => word && !banned.includes(word))
    .forEach(word => map.set(word, (map.get(word) || 0) + 1));
  // 这个思路是利用循环找出出现最大次数的单词
  let max = 0;
  let ans = ''
  for (const key of map) {
    if (key[1] > max) {
      max = key[1];
      ans = key[0];
    }
  }
  return ans;
};
