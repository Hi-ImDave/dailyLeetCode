function romanToInt(s){
    const numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let integerArray = []
    let integer = 0
    for(num of s){
        numerals[num]
        integerArray.push(numerals[num])
    }
    for(let i = 0; i < integerArray.length; i++){
        let j = i + 1
        if(integerArray[i] < integerArray[j]){
            integer += integerArray[j] - integerArray[i]
            i++
        } else {
            integer += integerArray[i]
        }
    }
    return integer
}

romanToInt('MCMXCIV')