var getDecimalValue = function (head) {
  let binString = "";
  while (head != null) {
    binString = binString.concat(head.val);
    head = head.next;
  }
  return parseInt(binString, 2);
};
