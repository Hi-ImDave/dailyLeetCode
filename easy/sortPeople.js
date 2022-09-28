var sortPeople = function (names, heights) {
  let result = []
  while (result.length < names.length) {
    let tallest = heights.indexOf(Math.max(...heights))
    result.push(names[tallest])
    heights.splice(tallest, 1, 0)
  }
  return result
}

sortPeople(['mary', 'john', 'emma'], [180, 160, 175])
