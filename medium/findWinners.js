var findWinners = function (matches) {
  const playerRecords = {}
  let victors = [[], []]
  for (match of matches) {
    if (match[0] in playerRecords) {
      playerRecords[match[0]][0] += 1
    } else {
      playerRecords[match[0]] = [1, 0]
    }
    if (match[1] in playerRecords) {
      playerRecords[match[1]][1] += 1
    } else {
      playerRecords[match[1]] = [0, 1]
    }
  }
  for (player in playerRecords) {
    if (playerRecords[player][0] > 0 && playerRecords[player][1] === 0) {
      victors[0].push(Number(player))
    } else if (playerRecords[player][1] === 1) {
      victors[1].push(Number(player))
    }
  }
  return victors
}

findWinners([
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
])
