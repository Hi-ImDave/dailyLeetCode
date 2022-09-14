heightChecker = (heights) => {
  const sorted = [...heights].sort((a,b) => a-b,0)
  let outOfOrder = 0;
  for(let i = 0; i < heights.length; i++){
    if(heights[i] !== sorted[i]){
      outOfOrder++
    }
  }
  return outOfOrder
};
