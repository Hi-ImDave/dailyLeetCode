let searchInsert = function(nums, target) {
    let left = 0
    let right = 1
    while(right < nums.length || left < nums.length){
        if(nums[left] === target || nums[left] > target){
            return left
        } else if(nums[left] < target && nums[right] > target || nums[right] === target){
            return right
        }
        right++
        left++
    }
    return nums.length
};

searchInsert([1], 0)