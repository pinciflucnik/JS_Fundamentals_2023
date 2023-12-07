function mirrorWords(input) {
    let text = input[0];
    let pattern = /(?<symbol>[#@])(?<firstWord>[A-Za-z]{3,})\k<symbol>{2}(?<secondWord>[A-Za-z]{3,})\k<symbol>/g;
    let match = pattern.exec(text);
    let pairsFound = 0;
    let mirrorWordsFound = 0;
    let mirrorWords = [];
    while (match) {
        pairsFound++;
        let firstWord = match.groups.firstWord;
        let secondWord = match.groups.secondWord;
        let buffer = secondWord.split('').reverse().join('');
        if (firstWord === buffer) {
            mirrorWordsFound++;
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }
        // pattern.exec(text);
        match = pattern.exec(text);
    }
    if (pairsFound === 0) {
        console.log(`No word pairs found!`);
    } else {

        console.log(`${pairsFound} word pairs found!`);
    }
    if (mirrorWordsFound === 0) {
        console.log(`No mirror words!`);
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log('---DIVIDER---');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('---DIVIDER---');
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);