let plusOne = (digits) => {
    let currDigit = digits.length - 1;
    
    while(currDigit >= 0){
        if(currDigit > 0 && digits[currDigit] === 9){
            digits[currDigit] = 0
            currDigit--
        } else if(currDigit === 0 && digits[currDigit] === 9){
            digits[currDigit] = 0;
            digits.unshift(1)
            return digits
        } else {
            digits[currDigit]++
            return digits
        }     
    }    
};



plusOne([8, 9])