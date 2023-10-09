var rotateString = function (s, goal) {
  let rotatedStrings = [];
  let tempArr = Array.from(s);
  for (let i = 0; i < s.length; i++) {
    let temp = tempArr.shift();
    tempArr.push(temp);
    rotatedStrings.push(tempArr.join(""));
  }
  if (rotatedStrings.includes(goal)) {
    return true;
  }
  return false;
};
