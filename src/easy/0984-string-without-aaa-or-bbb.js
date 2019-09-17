/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
  let a = 'a', b = 'b';
  if (A > B) {
    [A, B] = [B, A];
    [a, b] = [b, a];
  }
  if (2 * A > B) return (b + b + a).repeat(B - A) + (b + a).repeat(2 * A - B);
  else return (b + b + a).repeat(A) + b.repeat(B - 2 * A);
};

/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
  let res = '';
  let a = 0, b = 0;
  while (A + B) {
    if ((A > B && a < 2) || b === 2) {
      res += 'a';
      A -= 1;
      a += 1;
      b = 0;
    } else {
      res += 'b';
      B -= 1;
      b += 1;
      a = 0;
    }
  }
  return res;
};
