function lettersChangeNumbers(input) {
    let tokens = input.split(' ');
    let sum = 0;
    for (const token of tokens) {
        if (token !== '') {
            let tokenArr = token.split('');
            let firstLetter = tokenArr.shift().trim();
            let lastLetter = tokenArr.pop().trim();
            let num = Number(tokenArr.join('').trim());
            if (firstLetter === firstLetter.toUpperCase()) {
                firstLetter = firstLetter.charCodeAt(0) - 64;
                num /= firstLetter;
            } else {
                firstLetter = firstLetter.charCodeAt(0) - 96;
                num *= firstLetter;
            }
            if (lastLetter === lastLetter.toUpperCase()) {
                lastLetter = lastLetter.charCodeAt(0) - 64;
                num -= lastLetter;
            } else {
                lastLetter = lastLetter.charCodeAt(0) - 96;
                num += lastLetter;
            }
            sum += num;
        }
    }
    console.log(sum.toFixed(2));
}
lettersChangeNumbers('A12b s17G');
console.log('-----DIVIDER-----');
lettersChangeNumbers('P34562Z q2576f H456z');
console.log('-----DIVIDER-----');
lettersChangeNumbers('a1A');