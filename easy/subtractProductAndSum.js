var subtractProductAndSum = function (n) {
  let int = n
    .toString()
    .split('')
    .map((num) => Number(num))
  let product = int.reduce((a, b) => a * b)
  let sum = int.reduce((a, b) => a + b, 0)

  return product - sum
}

subtractProductAndSum(234)
