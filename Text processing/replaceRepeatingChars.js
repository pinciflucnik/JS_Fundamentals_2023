function replaceRepeatingChars(text){
    let textArr = text.split('');
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i] === textArr[i+1]){
            textArr.splice(i+1,1);
            i--;
        }        
    }
    console.log(textArr.join(''));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
console.log('---DIVIDER---');
replaceRepeatingChars('qqqwerqwecccwd');
