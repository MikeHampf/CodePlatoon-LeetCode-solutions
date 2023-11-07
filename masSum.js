var maxSum = function (nums) {
  let sumArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let arr1 = Array.from(String(nums[i]));
      let arr2 = Array.from(String(nums[j]));
      if (Math.max(...arr1) == Math.max(...arr2)) {
        sumArr.push(nums[i] + nums[j]);
      }
    }
  }
  if (!sumArr.length) {
    return -1;
  } else {
    return Math.max(...sumArr);
  }
};
