var romanToInt = function(s) {
  let res = 0
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  for (let i = 0; i < s.length; i++) {
    let val = map[s[i]]
    if (i === s.length - 1 || map[s[i + 1]] <= map[s[i]]) {
      res += val
    } else {
      res -= val
    }
  }

  return res
};