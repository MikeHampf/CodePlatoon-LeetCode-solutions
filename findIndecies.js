var findIndices = function (nums, indexDifference, valueDifference) {
  let indexes = [];
  if (indexDifference == 0 && valueDifference == 0) {
    return [0, 0];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (
        Math.abs(i - j) >= indexDifference &&
        Math.abs(nums[i] - nums[j]) >= valueDifference
      ) {
        indexes.push(i, j);
      }
    }
  }
  if (indexes.length) {
    return indexes;
  } else {
    return [-1, -1];
  }
};
