var reverse = function(x){
    if(x>0){
        arr = Array.from(String(x))
        if(aff[arr.length]=='0'){
            arr.pop()
        }
        let revInt = arr.reverse()
        revInt = revInt.join('')
        console.log(revInt)
        if(revInt > 2**31-1){
            return 0
        }
        else{
            return revInt
        }
    }
    else if(x<0){
        arr = Array.from(String(x))
        if(arr[arr.length-1]=='0'){
            arr.pop()
        }
        if(arr[0]=="-"){
            arr.shift()
        }
        let revInt = arr.reverse()
        revInt.unshift("-")
        revInt = revInt.join('')
        if(revInt < -(2**31)){
            return 0
        }
        else{
            return revInt
        }
    }
    else{
        return 0
    }
}