let isValid = (s) => {
    const openingBrackets = '([{';
    const closingBrackets = ')]}';
    const matchingBrackets = { ')':'(' , ']':'[' , '}':'{' };
    const stack = [];
    for (const char of s) {
      if(openingBrackets.includes(char)) {
        stack.push(char);
        console.log(stack)
      } else if(closingBrackets.includes(char)) {
        if(stack.length === 0){
          return false;
        }
        if(stack[stack.length - 1] === matchingBrackets[char]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0
};

isValid("([])(){}(())()()")