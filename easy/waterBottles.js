var numWaterBottles = function (numBottles, numExchange) {
  let res = numBottles
  while (numBottles >= numExchange) {
    res += Math.floor(numBottles / numExchange)
    numBottles =
      Math.floor(numBottles / numExchange) + (numBottles % numExchange)
  }
  return res
}
