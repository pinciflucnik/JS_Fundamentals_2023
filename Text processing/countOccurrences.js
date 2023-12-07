function countOccurrences(text, word){
    let arrOftex = text.split(" ");
    let count = arrOftex.filter(e => e === word);
    console.log(count.length);
}
countOccurrences('This is a word and it also is a sentence',
'is')