var middleNode = function (head) {
  let current = head;
  let count = 0;
  while (current) {
    count++;
    current = current.next;
  }
  let mid = Math.floor(count / 2);
  while (mid) {
    head = head.next;
    mid--;
  }
  return head;
};
