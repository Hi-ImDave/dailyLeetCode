let findMaxConsecutiveOnes = (nums) => {
  return Math.max(
    ...nums
      .join('')
      .split('0')
      .map((numbers) => numbers.length)
  )
}

findMaxConsecutiveOnes([1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1])
