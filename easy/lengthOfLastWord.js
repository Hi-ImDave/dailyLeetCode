let lengthOfLastWord = function(s) {
    let array = s.trim().split(' ')
    return array[array.length - 1].length
};

lengthOfLastWord("   fly me   to   the moon  ")