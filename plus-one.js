var plusOne = function(digits){
    digits[digits.length-1]++
    for(let i = digits.length-1; i>0; i--){
        if(digits[1]==10){
            digits[i]=0
            digits[i-1]++
        }
    }
    if(digits[0]==10){
        digits.shift()
        digits.unshift(0)
        digits.unshift(1)
    }
    return digits
}
console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))