let containsDuplicate = (nums) => {
    let visited = {};
    for(number of nums){
        if(number in visited){
            return true
        } else {
            visited[number] = true
        }
    }
    return false
};

containsDuplicate([1,2,3,4])