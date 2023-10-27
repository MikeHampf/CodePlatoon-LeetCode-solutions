var isPowerOfFour = function (n) {
  let exp = 0;
  let num = 4 ** exp;
  while (n >= num) {
    num = 4 ** exp;
    if (num == n) {
      return true;
    }
    exp++;
  }
  return false;
};
