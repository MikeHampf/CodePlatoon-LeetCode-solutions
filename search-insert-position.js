var searchInsert = function(nums, target){
    let idx = 0
    for(let i =0; i<nums.length; i++){
        if(nums[i]==target){
            return i 
        }
        if(nums[i]<target){
            idx++
        }
    }
    return idx
}