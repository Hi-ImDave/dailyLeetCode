var duplicateZeros = function (arr) {
  let i = 0
  let length = arr.length
  while (i < arr.length) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0)
      i++
    }
    i++
  }
  while (arr.length > length) arr.pop()
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])
