let moveZeroes = (nums) => {
  if (nums.length <= 1) return nums
  let p1 = 0
  let p2 = 1
  while (p1 < nums.length) {
    if (nums[p1] === 0 && nums[p2] !== 0) {
      swap(nums, p1, p2)
      p1++
      p2++
    } else if (nums[p1] === 0 && nums[p2] === 0) {
      p2++
    } else if (nums[p1] !== 0) {
      p1++
      p2++
    }
    if (p2 == nums.length) {
      p1++
      p2--
    }
  }
  return nums
}

let swap = (array, left, right) => {
  let temp = array[left]
  array[left] = array[right]
  array[right] = temp
  return array
}
