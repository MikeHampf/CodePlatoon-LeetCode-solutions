var generate = function(numRows){
    let retArr = [[1],[1,1]]
    let newArr = []
    if(numRows==1){
        return [[1]]
    }
    else{
        for(let i = 2; i < numRows; i++){
            newArr = [1,]
            for(let k = 1; k < retArr[i-1].length; k++){
                let temp = retArr[i-1][k] + retArr[i-1][k-1]
                newArr.push(temp)
            }
            newArr.push(1)
            retArr.push(newArr)
        }
    }
    return retArr
}