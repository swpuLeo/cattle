/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  const quadTree = (grid, x, y, offset) => {
    if (offset < 1) return null;
    for (let i = x; i < x + offset; i++) {
      for (let j = y; j < y + offset; j++) {
        if (grid[i][j] !== grid[x][y]) { // non leaf node
          offset = offset / 2;
          return new Node(grid[i][j], false,
                         quadTree(grid, x, y, offset),
                         quadTree(grid, x, y + offset, offset),
                         quadTree(grid, x + offset, y, offset),
                         quadTree(grid, x + offset, y + offset, offset));
        }
      }
    }
    // leaf node
    return new Node(grid[x][y], true, null, null, null, null);
  }
  return quadTree(grid, 0, 0, grid.length);
};
