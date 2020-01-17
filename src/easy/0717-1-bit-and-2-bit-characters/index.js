var isOneBitCharacter = function(bits) {
  if (bits.length < 2) return true;
  let count = 0;
  for (let i = bits.length - 2; i >= 0; i--) {
    if (bits[i] === 1) count += 1;
    if (bits[i] === 0) break;
  }
  return count % 2 === 0;
};