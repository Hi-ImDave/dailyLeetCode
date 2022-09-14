let majorityElement = (nums) => {
  let visited = {};
  let majority = Math.ceil(nums.length / 2)
  for(num of nums ){
    if(!visited[num]){
      visited[num] = 1
    } else{
      visited[num]++
    }
    if(visited[num] === majority){
      return num
    }
  }
};

majorityElement([2,2,1,1,1,2,2])