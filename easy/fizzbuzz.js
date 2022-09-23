var fizzBuzz = function (n) {
  let result = []
  let curr = 1
  while (curr <= n) {
    if (curr % 15 == 0) {
      result.push('FizzBuzz')
    } else if (curr % 3 == 0) {
      result.push('Fizz')
    } else if (curr % 5 == 0) {
      result.push('Buzz')
    } else {
      result.push(curr.toString())
    }
    curr++
  }

  return result
}
