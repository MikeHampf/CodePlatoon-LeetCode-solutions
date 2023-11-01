var minimumRightShifts = function (nums) {
  copyArr = (x) => x;
  let copy = nums.map(copyArr);
  let count = 0;
  while (count < nums.length) {
    if (copy.sort((a, b) => a - b).toString() == nums.toString()) {
      return count;
    } else {
      let temp = nums.pop();
      nums.unshift(temp);
      count++;
    }
  }
  return -1;
};
