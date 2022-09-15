let sortedSquares = (nums) => {
  let sorted = [];
  for (num of nums) {
    sorted.push(Math.pow(num, 2));
  }
  return sorted.sort((a, b) => a - b, 0);
};

sortedSquares([-4, -1, 0, 3, 10]);
