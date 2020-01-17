/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  var res = [[1, 1]];
  for (var i = 1; i < rowIndex; i++) {
    var last = res[res.length - 1];
    var cur = [];
    for (var j = 0; j <= last.length; j++) {
      var lastPre = last[j - 1] ? last[j - 1] : 0;
      var lastNxt = last[j] ? last[j] : 0;
      cur[j] = lastPre + lastNxt;
    }
    res.push(cur);
  }
  return res[rowIndex - 1];
};
