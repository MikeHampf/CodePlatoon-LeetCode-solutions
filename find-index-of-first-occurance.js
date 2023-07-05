var strStr = function(haystack,needle){
    for(let i=0; i<=haystack.length-needle.length; i++){
        console.log(haystack.substring(i,i+needle.length))
        if(haystack.substring(i,i+needle.length)==needle){
            return i
        }
    }
    return -1
}