var isPalidrome = function(x){
    let xStr = String(x)
    let yStr = ''
    for(let i=xStr.length-1; i>=0; i--){
        yStr = yStr + xStr[i]
    }
    console.log(xStr, yStr)
    if(xStr[0]=="-"){
        return false
    }
    else if(xStr != yStr){
        return false
    }
    else{
        return true
    }
}