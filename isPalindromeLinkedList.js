var isPalindrome = function (head) {
  let arr1 = [];
  let arr2 = [];
  while (head != null) {
    arr1.push(head.val);
    arr2.unshift(head.val);
    head = head.next;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
};
