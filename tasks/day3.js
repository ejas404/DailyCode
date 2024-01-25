var shuffle = function(nums, n) {
    let newArr = []
    let j = 0;
    for(let i=0;i<n;i++){
        newArr[j] = nums[i]
        newArr[j+1] = nums[n+i]
        j+=2;
    }
    return newArr;
};

shuffle([1,2,3,4,5,6],3)