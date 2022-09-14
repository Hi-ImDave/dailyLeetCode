let sumOfUnique = (nums) => {
  let unique = {};
  let result = 0
  for(num of nums){
    if(!unique[num]){
      unique[num] = 1;
    } else {
      unique[num]++
    }
  }
  for(key in unique){
    if(unique[key] === 1){
      result += +key
    }
  }
  return result
};
