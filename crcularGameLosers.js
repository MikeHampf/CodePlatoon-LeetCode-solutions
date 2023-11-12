var circularGameLosers = function (n, k) {
  // let i = 1
  // let friend = 1
  // console.log(friend%n)
  // friend = friend + k*i
  // console.log(friend%n)
  // i++
  // friend = friend + k*i
  // console.log(friend%n)
  // i++
  // friend = friend + k*i
  // console.log(friend%n)

  let winners = [];
  let losers = [];
  let i = 1;
  let friend = 1;
  for (let j = 1; j <= n; j++) {
    losers.push(j);
  }
  while (!winners.includes(friend)) {
    winners.push(friend);
    friend = (friend + k * i) % n;
    i++;
  }
  for (let a = 0; a < winners.length; a++) {
    losers.splice(losers.indexOf(winners[a]), 1);
  }
  return losers;
};
