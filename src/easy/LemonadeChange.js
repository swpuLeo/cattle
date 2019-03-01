/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const map = { 5: 0, 10: 0, 20: 0 };
  for (const bill of bills) {
    if (bill === 5) map[bill] += 1;
    if (bill === 10) {
      map[bill] += 1;
      map[5] -= 1;
    }
    if (bill === 20) {
      if (map[10] > 0) {
        map[bill] += 1;
        map[10] -= 1;
        map[5] -= 1;
      } else {
        map[5] -= 3;
      }
    }
    if (map[5] < 0) return false;
  }
  return true;
};