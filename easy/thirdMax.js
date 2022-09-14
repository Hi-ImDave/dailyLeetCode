let thirdMax = (nums) => {
    
    let topThree = new Array(3).fill(-Infinity)
    let duplicates = new Map()
    for(num of nums){
      if(num in duplicates){
        continue
      } else {
        duplicates[num] = true
      }
      if(num > topThree[0]){
        topThree[0] = num;
      }
      if(topThree[0] > topThree[1]){
        swap(topThree, 0, 1)
      }
      if(topThree[1] > topThree[2]){
        swap(topThree, 1, 2)
      }
    }
    return topThree.includes(-Infinity) ? Math.max(...topThree) : topThree[0]
  };

let swap = (array, leftIdx, rightIdx) => {
  const temp = array[leftIdx];
  array[leftIdx] = array[rightIdx];
  array[rightIdx] = temp;
  return array
}

thirdMax([1, 1, 2, 3])