var merge = function (nums1, m, nums2, n) {
  let j = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] == 0 && nums2[j] != undefined) {
      nums1[i] = nums2[j];
      j++;
    }
  }
  nums1.sort(function (a, b) {
    return a - b;
  });
};
