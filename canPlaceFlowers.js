var canPlaceFlowers = function(flowerbed, n){
    if(flowerbed.length==1 && flowerbed[0]==0){
        return true
    }
    if(flowerbed[0]==0 && flowerbed[1]==0){
        flowerbed[0]=1
        n--
    }
    if(flowerbed[flowerbed.length-2]==0 && flowerbed[flowerbed.length-1]==0){
        flowerbed[flowerbed.length-1]=1
        n--
    }
    if(n<=0){
        return true
    }
    for(let i=2; i<flowerbed.length; i++){
        if(flowerbed[1]==0 && flowerbed[i-1]==0 && flowerbed[i-2]==0){
            flowerbed[i-1]=1
            n--
        }
    }
    console.log(flowerbed)
    if(n<=0){
        return true
    }
    return true
}