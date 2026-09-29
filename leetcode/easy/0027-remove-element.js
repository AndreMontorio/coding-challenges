var removeElement = function(nums, val) {
    let maxIndex = nums.length;
    for(let i = 0; i < maxIndex; i++) {
        if(maxIndex <= i)
            break;
        if(nums[i] === val) {
            nums.push(nums[i]);
            nums.splice(i, 1);
            maxIndex--;
            i--;
        }
    }

    return maxIndex;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));