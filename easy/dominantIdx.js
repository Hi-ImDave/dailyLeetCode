// for of method

let dominantIndex = (nums) => {
  const greatest = Math.max(...nums)
  const greatestIdx = nums.indexOf(greatest)
  for(num of nums){
    if(num === greatest || num * 2 <= greatest){
      continue
    } else {
      return -1
    }
  }
  return greatestIdx
};

// filter method

let dominantIndex2 = (nums) => {
  const greatest = Math.max(...nums)
  return nums.filter((num) => num === greatest || num * 2 <= greatest).length === nums.length ? nums.indexOf(greatest) : -1
}

