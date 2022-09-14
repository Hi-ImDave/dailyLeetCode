let kidsWithCandies = (candies, extraCandies) => {
  const greatest = Math.max(...candies);
  const result = new Array(candies.length).fill(false);
  for(let i = 0; i < candies.length; i++){
    if(candies[i] + extraCandies >= greatest){
      result[i] = true
    }
  }
  return result
};

kidsWithCandies([2, 3, 5, 1, 3], 3)