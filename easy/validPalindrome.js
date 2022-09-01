let isPalindrome = function(s) {
    let sanitizedString = s.toLowerCase().replace(/[^0-9a-z]/gi, "")
    let left = 0;
    let right = sanitizedString.length - 1
    while(left < right){
        if(sanitizedString[left] === sanitizedString[right]){
            left++
            right--
        } else{
            return false
        }
    }
    return true
};

isPalindrome("Ab_a")