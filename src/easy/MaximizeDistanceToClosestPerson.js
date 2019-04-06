/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  const length = seats.length;
  const left = [];
  const right= [];
  let dis = length;
  let res = 0;
  for (let i = 0; i < length; i++) {
    if (seats[i] === 1) dis = 0;
    else dis += 1;
    left[i] = dis;
  }
  dis = length;
  for (let i = length - 1; i >= 0; i--) {
    if (seats[i] === 1) dis = 0;
    else dis += 1;
    right[i] = dis;
  }
  for (let i = 0; i < length; i++) {
    if (Math.min(left[i], right[i]) > res) {
      res = Math.min(left[i], right[i]);
    }
  }
  return res;
};
