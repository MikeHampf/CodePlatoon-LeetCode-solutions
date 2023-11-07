var splitWordsBySeparator = function (words, separator) {
  let retArr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(separator)) {
      let wordz = words[i].split(separator);
      for (let j = 0; j < wordz.length; j++) {
        if (wordz[j]) {
          retArr.push(wordz[j]);
        }
      }
    } else {
      retArr.push(words[i]);
    }
  }
  return retArr;
};
