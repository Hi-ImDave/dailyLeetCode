let mostWordsFound = (sentences) => {
    let longestSentence = 0
    for(let i = 0; i < sentences.length; i++){
        let currentlength = sentenceSplitter(sentences[i])
        if(currentlength > longestSentence){
            longestSentence = currentlength
        }
    }
    return longestSentence
};

let sentenceSplitter = (sentence) => {
    return sentence.split(' ').length
};

mostWordsFound(["alice and bob love leetcode","i think so too", "this is great thanks very much"])