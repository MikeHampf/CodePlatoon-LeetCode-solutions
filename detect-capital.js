var detectCapitalUse = function (word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  if (word === word.toLowerCase()) {
    return true;
  }
  if (word === word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()) {
    return true;
  }
  return false;
};
