let removeVowels = (s) => {
    const vowels = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true}
    let removed = ''
    for(letter of s){
        if(!(letter in vowels)){
            removed += letter
        }
    }
    return removed
};

removeVowels("leetcodeisacommunityforcoders")
removeVowels('aAeEiIoOuU')
removeVowels('aeiou')