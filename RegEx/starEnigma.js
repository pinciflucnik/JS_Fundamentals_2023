function starEnigma(input) {
    let lineCount = Number(input.shift());
    let inputLength = input.length;
    // if(inputLength < lineCount){
    //     lineCount = inputLength;
    // }
    let validPattern = /[^@\-!\:\>]*\@(?<name>[A-Za-z]+)[^@\-!\:\>]*[\:](?<population>[\d]+)[^@\-!\:\>]*\!(?<attackType>[AD])\![^@\-!\:\>]*\-\>(?<soldierCount>[\d]+)[^@\-!\:\>]*/g
    let decryptionRegex = /[SsTtAaRr]/g;
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let i = 0; i < lineCount; i++) {
        let message = input[i];
        let decryptedMessage = '';
        if (validPattern.test(message) !== true) {
            let decriptionCode = message.match(decryptionRegex).length;
            for (const char of message) {
                let currentChar = String.fromCharCode(char.charCodeAt() - decriptionCode);
                decryptedMessage += currentChar;
            }
        } else {
            decryptedMessage = message;
        }
        validPattern.lastIndex = 0;
        if (validPattern.test(decryptedMessage)) {
            validPattern.lastIndex = 0;
            let messageArr = validPattern.exec(decryptedMessage);
            validPattern.lastIndex = 0;
            let action = messageArr.groups.attackType;
            let planetName = messageArr.groups.name;
            switch (action) {
                case 'A':
                    attackedPlanets.push(planetName);
                    break;
                case 'D':
                    destroyedPlanets.push(planetName);
                    break;
            }
        }
    }
    
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    let attackedPlanetsCount = attackedPlanets.length;
    let destroyedPlanetsCount = destroyedPlanets.length;
    console.log(`Attacked planets: ${attackedPlanetsCount}`);
    for (const planet of attackedPlanets) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${destroyedPlanetsCount}`);
    for (const planet of destroyedPlanets) {
        console.log(`-> ${planet}`);
    }

}
starEnigma(['5', 'PQ@Alderaa1:30000!A!->20000',]);
console.log('---DIVIDER---');
// starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);