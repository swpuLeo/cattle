var compress = function(chars) {
  let left = 0, right = 0;
  let count = 0;
  const res = [];
  while (right < chars.length) {
    if (chars[left] !== chars[right]) {
      res.push(chars[left], count + '');
      left = right;
      count = 1;
    } else {
      count += 1;
    }
    if (right === chars.length - 1) {
      res.push(chars[left], count + '');
    }
    right += 1;
  }
  return res;
};

console.log(compress(['a','b','a','b','b','c','c','c','d','e']))