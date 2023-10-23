var isAnagram = function (s, t) {
  let sArr = Array.from(s).sort();
  let tArr = Array.from(t).sort();
  if (tArr.toString() === sArr.toString()) {
    return true;
  } else {
    return false;
  }
};
