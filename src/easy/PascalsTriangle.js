/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  var res = [[1]];
  for (var i = 1; i < numRows; i++) {
    var last = res[res.length - 1];
    var cur = [];
    for (var j = 0; j <= last.length; j++) {
      var lastPre = last[j - 1] ? last[j - 1] : 0;
      var lastNxt = last[j] ? last[j] : 0;
      cur[j] = lastPre + lastNxt;
    }
    res.push(cur);
  }
  return res;
};

/**
 * let generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let arr = [[1]];
  for (let i = 1; i < numRows; ++i) {
    let row = [1];
    for (let j = 1; j < arr[i - 1].length; ++j) {
      row.push(arr[i - 1][j - 1] + arr[i - 1][j])
    }
      row.push(1);
      arr.push(row);
  }
  return arr;
};
 */