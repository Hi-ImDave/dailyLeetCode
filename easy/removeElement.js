let removeElement = (nums, val) => {
    let leftPointer = 0;
    let rightPointer = nums.length - 1
    while(rightPointer >= leftPointer){
      if((nums[leftPointer] == val && nums[rightPointer] !== val)){
        swap(nums, leftPointer, rightPointer)
        leftPointer++;
        rightPointer--;
      } else if(nums[leftPointer] !== val && nums[rightPointer] == val){
        nums[rightPointer] = null
        leftPointer++
        rightPointer--
      } else if(nums[leftPointer] !== val && nums[rightPointer] !== val){
        leftPointer++
      } else {
        nums[rightPointer] = null
        rightPointer--
      }
    }
    return leftPointer
};

let swap = (array, leftIdx, rightIdx) => {
  array[leftIdx] = array[rightIdx];
  array[rightIdx] = null
  return array
}

removeElement([3, 2, 2, 3], 3) // [2, 2, 2, 3, null]