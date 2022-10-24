var findClosestNumber = function (nums) {
  let closest = Infinity
  for (num of nums) {
    if (
      Math.abs(num) - 0 < Math.abs(closest) ||
      (num > 0 && num === Math.abs(closest))
    ) {
      closest = num
    }
  }
  return closest
}

findClosestNumber([-4, -1, 1, -1])
