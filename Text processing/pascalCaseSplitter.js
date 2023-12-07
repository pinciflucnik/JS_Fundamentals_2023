function pascalCaseSplitter(text) {
    let result = [];
    text = text.split('');
    let upperCaseCount = 0;
    let word = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === char.toUpperCase()) {
            upperCaseCount++;
            if (upperCaseCount > 1) {
                result.push(word);
                word = char;
                upperCaseCount = 1;
            } else {
                word += char;
            }
        } else {
            word += char;
        }
        if (i === text.length - 1) {
            result.push(word);

        }
    }
    console.log(result.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('---DIVIDER---');
pascalCaseSplitter('HoldTheDoor');
console.log('---DIVIDER---');
pascalCaseSplitter('ThisIsSoAnnoyingToDo')