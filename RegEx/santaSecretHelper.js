function santaSecretHelper(input) {
    let key = Number(input.shift());
    let validPattern = /\@(?<name>[A-Z][a-z]+)[^\@\-\!\:]*\!(?<behaviour>[G|N])\!/g;
    for (const message of input) {
        if (message !== 'end') {
            let decryptedMessage = '';
            for (let char of message) {
                let charCode = char.charCodeAt();
                let currentChar = String.fromCharCode(charCode - key);
                decryptedMessage += currentChar;
            }
            let match = validPattern.exec(decryptedMessage);
            while (match){
                let isNaughty = false;
                let behaviour = match.groups.behaviour;
                let name = match.groups.name;
                if (behaviour === 'N'){
                    isNaughty = true;
                }
                if (!isNaughty){
                    console.log(name);
                }
                match = validPattern.exec(decryptedMessage);
            }
        }
    }

}
santaSecretHelper(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]);
console.log('---DIVIDER---');
santaSecretHelper(['3',
    'N}eideidmk$\'(mnyenmCNlpamnin$J$\', \'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
])