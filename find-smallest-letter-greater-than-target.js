var nextGreatestLetter = function(letters, target){
    count = 0
    for(let i=0; i<letters.length; i++){
        if(target>=letters[i]){
            count++
        }
    }
    if(count==letters.length){
        return letters[0]
    }
    return letters[count]
}