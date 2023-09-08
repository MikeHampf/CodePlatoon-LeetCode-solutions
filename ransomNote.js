var conConstruct = function (ransomNote, magazine) {
  if (magazine.length === 0) {
    return false;
  }
  let arr = magazine.split("");
  let answer = true;
  for (let i = 0; i < ransomNote.length; i++) {
    if (arr.includes(ransomNote[i])) {
      arr.splice(arr.indexOf(ransomNote[i], 1));
    } else {
      answer = false;
    }
  }
  return answer;
};
