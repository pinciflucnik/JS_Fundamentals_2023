function postOffice(input) {
    let type = typeof input;
    if (type === 'object') {
        input = input[0];
    }

    let messages = input.split('|');

    let capitalPattern = /([#|$|%|*|&])(?<letters>[A-Z]+)\1/g;
    let codeAndLEngthPattern = /(?<code>[\d]{2}):(?<length>[\d]{2})/g;
    let capitalLetters = capitalPattern.exec(messages[0]);
    let wordData = codeAndLEngthPattern.exec(messages[1]);
    let wordsArr = messages[2].split(' ');
    while (capitalLetters) {
        let capletters = capitalLetters.groups.letters;
        for (const capLet of capletters) {

            while (wordData) {
                let letter = String.fromCharCode(wordData.groups.code);
                let length = Number(wordData.groups.length) + 1;
                if (Number(wordData.groups.code) === letter.toUpperCase().charCodeAt()) {
                    for (let word of wordsArr) {
                        if (word[0] === letter && word.length === length && letter === capLet) {
                            console.log(word);
                        }
                    }
                    wordData = codeAndLEngthPattern.exec(messages[1]);
                }
            }
        }

        capitalLetters = capitalPattern.exec(messages[0]);
    }
}
// postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos');
console.log('---DIVIDER---');
postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig');