var wateringPlants = function (plants, capacity) {
  let capacityReset = capacity
  let currentPlant = 0
  let steps = 0
  while (currentPlant < plants.length) {
    if (capacity - plants[currentPlant] >= 0) {
      capacity = capacity - plants[currentPlant]
      plants[currentPlant] = 0
      steps++
      currentPlant++
    } else {
      steps += plants.indexOf(plants[currentPlant])
      currentPlant = 0
      capacity = capacityReset
    }
  }
  return steps
}

wateringPlants([2, 2, 3, 5], 5)
