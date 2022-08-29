let isHappy = function(n) {
    let sumOfSquares = n;
    const result = {};
    while (sumOfSquares !== 1) {
        let digits = Array.from(String(sumOfSquares), Number);
        sumOfSquares = digits.reduce((prev, curr) => prev + Math.pow(curr, 2), 0);
        if (!result[sumOfSquares]) {
            result[sumOfSquares] = true;
        } else {
            return false
        }
    }
    return true;
};

isHappy(19)