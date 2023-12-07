function revealWords(words, text){
    let wordsArr= words.split(", ");
    let textArr = text.split(" ");
    for (const word of textArr) {
        for (const hidden of wordsArr) {
            if (hidden.length === word.length && word.includes("*")){
                textArr[textArr.indexOf(word)] = hidden;
            }
        }
    }
    console.log(textArr.join(' '));
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')