let firstUniqChar = function(s) {
    let visited = new Map();
    for(const letter of s){
        if(visited.has(letter)){
            visited.set(letter, 2)
        } else {
            visited.set(letter, 1)
        }
    }
    for(const letter of s){
        if(visited.has(letter) && visited.get(letter) === 1){
            return s.indexOf(letter)
        }
    }
    return -1
};

firstUniqChar('leetcode')