var canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;
  if (!ransomNote.length) return true;
  let index;
  for (let i = 0, len = ransomNote.length; i < len; i++) {
    if (magazine.indexOf(ransomNote[i]) > -1) {
      index = magazine.indexOf(ransomNote[i]);
      magazine = magazine.slice(0, index) + magazine.slice(index + 1, magazine.length);
    } else {
      return false;
    }
  }
  return true;
};
