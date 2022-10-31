let maxCoins = (piles) => {
  let myCoins = 0
  let sortedPiles = piles.sort((a, b) => b - a, 0)
  while (sortedPiles.length) {
    sortedPiles.shift()
    myCoins += sortedPiles[0]
    sortedPiles.shift()
    sortedPiles.pop()
  }
  return myCoins
}

maxCoins([2, 4, 1, 2, 7, 8])
