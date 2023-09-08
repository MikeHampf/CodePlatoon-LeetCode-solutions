var majorityElement = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    let temp = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (temp == nums[j]) {
        count++;
      }
    }
    arr.push([nums[i], count]);
  }
  let ansArr = arr[0];
  for (let k = 0; k < arr.length; k++) {
    if (ansArr[1] < arr[k[1]]) {
      ansArr = arr[k];
    }
  }
  return ansArr[0];
};
