var checkIfExist = function (arr) {
  const map = {}
  for (let idx of arr) {
    if (map[idx / 2] || map[idx * 2]) return true
    map[idx] = true
  }
  return false
}

checkIfExist([-2, 0, 10, -19, 4, 6, -8])
