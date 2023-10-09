var reverseBits = function (n) {
  let binary = n.toString(2);
  let ret = "";
  for (let i = binary.length - 1; i >= 0; i--) {
    ret = ret.concat(binary[i]);
  }
  while (ret.length < 32) {
    ret = ret.concat(0);
  }
  return parseInt(ret, 2);
};
