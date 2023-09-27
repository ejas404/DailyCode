let nums = [0,1,2,3,4], index = [0,1,2,2,1] ; 

let createTargetArray = function(nums, index) {
    let target = []
    for(let i=0;i<nums.length;i++){
        if(!target[index[i]]){
            target[index[i]] = nums[i]
        }else{
            for(let j=target.length-1 ; j>=index[i];j--){
                target[j+1] = target[j]
            }
             target[index[i]] = nums[i]
        }
    }
    return target;
}

createTargetArray(nums,index)