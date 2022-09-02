// Parameters: takes in a string - (columnTitle) - that represents column title of an Excel spreadsheet. Only uppercase values will be given. A pointer - (pointer) - will be used to loop through the input. - (digitPosition) - which will be the position of the current digit pointer is on (i.e. ('ZA'), Z would have a digit position of 2 and A would have a position of 1). - (alphabetLength) - which will be the length of the alphabet. charCodeConversion() will be a helper function used to convert the charCode to the correct alphabet position of the corresponding letter. This will help clean up the code.
// Return: A number - (columnNumber) - that represents the numerical value of the column as it relates to columnTitle.
// Example: titleToNumber('A') will return (1). titleToNumber('ZY') will return (701)
// PseudoCode: Store the value of the final indexes letter in (columnNumber). Use a pointer - (pointer) - to loop through the input once. While the pointer is not on the last index of input it will need to get the numerical value of the letter (i.e. - A = 1, B = 2,... Z = 26) and multiply that value by the value of (alphabetLength) to the power of (digitPosition). For an input of ('ZY') it would multiply the value of Z (26) by the number of letters in alphabet (26) to the power of (digitPosition) (2). Once the loop reaches the final index, it will break the loop and return (columnNumber). 

let titleToNumber = (columnTitle) => {
    let columnNumber = charCodeConversion(columnTitle[columnTitle.length - 1]);
    let pointer = 0;
    let digitPosition = columnTitle.length - 1
    const alphabetLength = 26
    while(pointer < columnTitle.length - 1){
        columnNumber += charCodeConversion(columnTitle[pointer]) * Math.pow(alphabetLength, digitPosition)
        pointer++
        digitPosition--
    }
    return columnNumber
};

let charCodeConversion = (letter) => {
    converted = letter.charCodeAt() - 64
    return converted
}

titleToNumber('FXSHRXW')