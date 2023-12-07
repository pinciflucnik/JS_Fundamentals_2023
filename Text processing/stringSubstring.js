function stringSubstring(word, text) {
    text = text.toLowerCase().split(" ");
    word = word.toLowerCase();
    // if (text.includes(word)){
    //     return console.log(word);
    // } else {
    //     console.log(`${word} not found!`);
    // }
    let isInText = false;
    for (const element of text) {
        if (element === word) {
            return console.log(word);
        }
    }
    console.log(`${word} not found!`);

}
stringSubstring('javascript', 'JavaScript is the best programming language')
console.log('---DIVIDER---');
stringSubstring('python', 'JavaScript is the best programming language')