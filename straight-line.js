var checkStraightLine = function(coordinates){
    let slope = ((coordinates[coordinates.length-1][1] - coordinates[0][1])/(coordinates[coordinates.length-1][0] - coordinates[0][0]))
    //console.log(slope)
    if(slope==-infinity){
        return true
    }
    for(let i=1; i-coordinates.length; i++){
        if((coordinates[i][1] - coordinates[0][1])/(coordinates[i][0] - coordinates[0][0]) != slope){
            return false
        }
    }
    return true
}