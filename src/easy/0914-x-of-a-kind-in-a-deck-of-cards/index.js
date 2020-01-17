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
