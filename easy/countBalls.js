var countBalls = function (lowLimit, highLimit) {
  let shelf = {}
  while (lowLimit <= highLimit) {
    let box = sumOfDigits(lowLimit)
    box in shelf ? shelf[box]++ : (shelf[box] = 1)
    lowLimit++
  }
  return Math.max(...Object.values(shelf))
}

const sumOfDigits = (value) => {
  let sum = 0
  while (value) {
    sum += value % 10
    value = Math.floor(value / 10)
  }
  return sum
}
