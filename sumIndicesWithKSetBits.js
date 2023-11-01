var sumIndicesWithKSetBits = function (nums, k) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let tempArr = Array.from(i.toString(2));
    let tempSum = eval(tempArr.join("+"));
    if (tempSum == k) {
      arr.push(parseInt(tempArr.join(""), 2));
    }
  }
  for (let j = 0; j < arr.length; j++) {
    sum += nums[arr[j]];
  }
  return sum;
};
