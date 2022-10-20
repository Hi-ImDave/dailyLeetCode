let mySqrt = (x) => {
  let oddNum = 1
  let subCount = 0
  while (x > 0) {
    x = x - oddNum
    subCount++
    oddNum += 2
  }
  return x === 0 ? subCount : subCount - 1
}

mySqrt(8)
