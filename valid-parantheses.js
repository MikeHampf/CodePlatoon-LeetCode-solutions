var isValid = function(s) {
    let arr = []
    const regex = /[\(\)\{\}\[\]]/g
    const regex2 = /[\)\}\]]/g
    for(let i = 0; i < s.length; i++){
        if(regex.test(s[i])){
            arr.push(s[i])
        }
    }
    if(arr.length%2 != 0){
        return false
    }
    let backHalf = []
    for(let j = arr.length-1; j >= 0; j--){
        if(regex2.test(arr[j])){
            backHalf.push(arr[j])
        }
    }
    console.log(backHalf)
    return arr
}

console.log(isValid("(fas(f}}{as{{a}sdf[]([]adf]{[asdf)"))