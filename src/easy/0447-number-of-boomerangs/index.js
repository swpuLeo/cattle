/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  const getDistance = (a, b) => {
    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
  }
  const length = points.length;
  let count = 0;
  if (length < 3) return 0;
  for (let i = 0; i < length; i++) {
    const map = new Map();
    for (let j = 0; j < length; j++) {
      if (i !== j) {
        const distance = getDistance(points[i], points[j]);
        map.set(distance, (map.get(distance) || 0) + 1);
      }
    }
    console.log(map);
    for (const n of map) {
      console.log(n);
      if (n[1] >= 2) {
        count += (n[1] * (n[1] - 1));
      }
    }
  }
  return count;
};
