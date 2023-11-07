var isGood = function (nums) {
  let arr = [];
  for (let i = 1; i < nums.length; i++) {
    arr.push(i);
  }
  arr.push(nums.length - 1);
  return arr.sort().toString() === nums.sort().toString();
};
