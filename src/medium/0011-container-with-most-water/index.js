/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length <= 1) return -1;
  let i = 0;
  let j = height.length - 1;
  let area = 0;
  while (i < j) {
    let h = Math.min(height[i], height[j]);
    area = Math.max(area, h * (j - i));
    if (height[i] < height[j]) i += 1;
    else j -= 1;
  }
  return area;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length <= 1) return 0;
  let area = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = 0; j < height.length; j++) {
      area = Math.max(area, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return area;
};
