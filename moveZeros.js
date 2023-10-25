var moveZeros = function (nums) {
  let count = 0;
  while (nums.includes(0)) {
    nums.splice(nums.indexOf(0), 1);
    count++;
  }
  while (count) {
    nums.push(0);
    count--;
  }
};
