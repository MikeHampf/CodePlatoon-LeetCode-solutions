var climbstairs = function(n){
    let combos = [0,1]
    for(let i = 2; i<=n; i++){
        combos.push(combos[i-2]+combos[i-1])
    }
    return combos[combos.length-2]
}

console.log(climbstairs(8))
console.log(climbstairs(56))