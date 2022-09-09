var isPalindrome = function(x) {
    if(x < 0) return false 
    if(x < 10) return true
    let digits = x.toString()
    let head = 0
    let tail = digits.length - 1
    while(head <= tail){
        if(digits[head] - digits[tail] === 0){
            head++
            tail--
        } else {
            return false
        }
    }
    return true
};

isPalindrome(1212)