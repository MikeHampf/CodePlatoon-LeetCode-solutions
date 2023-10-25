var containsNearbyDubplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        if (Math.abs(i - j) <= k) {
          return true;
        }
      }
    }
  }
  return false;
};
