/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s
  let row = 0
  let down = false
  let rows = Array(Math.min(s.length, numRows)).fill('')
  for (let char of s) {
    rows[row] += char
    if (row === 0 || row === rows.length - 1) down = !down
    row += down ? 1 : -1
  }
  return rows.join('')
};
