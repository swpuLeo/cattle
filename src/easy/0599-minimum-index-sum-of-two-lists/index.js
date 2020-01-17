/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const map = new Map();
  if (list1.length > list2.length) [list1, list2] = [list2, list1];
  list1.forEach((list, index) => {
    if (list2.includes(list)) {
      map.set(list, index + list2.indexOf(list));
    }
  });
  const ans = [...map.entries()].sort((a, b) => a[1] - b[1]);
  return ans.map(a => {
    if (a[1] === ans[0][1]) return a[0];
  }).filter(a => a);
};


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let res = [];
  let index = Infinity;
  list1.forEach((list, i) => {
    if (list2.includes(list)) {
      const j = list2.indexOf(list);
      if (i + j === index) res.push(list);
      else if (i + j < index) {
        index = i + j;
        res = [list];
      }
    }
  });
  return res;
};
