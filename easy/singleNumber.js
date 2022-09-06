let singleNumber = (nums) => {
    let visited = {};
    for(let number of nums){
        if(number in visited){
            visited[number] = true
        } else {
            visited[number] = false
        }
    }
    for(let key in visited){
        if(visited[key] === false){
            return key
        }
    }
};

singleNumber([4,1,2,1,2])