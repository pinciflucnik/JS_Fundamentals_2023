function thePianist(input) {
    let picesCount = Number(input.shift());
    let pianoPieces = {};
    for (let i = 0; i < picesCount; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pianoPieces[piece] = {
            'composer': composer,
            'key': key
        };
    }
    let index = 0;
    let command = input[index];
    index++;
    while (command !== 'Stop') {
        let tokens = command.split('|');
        let action = tokens[0];
        let piece = tokens[1];
        let isInList = pianoPieces.hasOwnProperty(piece);
        switch (action) {
            case 'Add':
                let composer = tokens[2];
                let key = tokens[3];
                if (!isInList) {
                    pianoPieces[piece] = {
                        'composer': composer,
                        'key': key
                    };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                    break;
                }
                console.log(`${piece} is already in the collection!`);
                break;
            case 'Remove':
                if (isInList) {
                    delete pianoPieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                    break;
                }
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                break;
            case 'ChangeKey':
                let newKey = tokens[2];
                if (isInList){
                    pianoPieces[piece]['key'] = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                    break;
                }
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                break;
        }

        command = input[index];
        index++;
    }
    for (const piece in pianoPieces) {
        console.log(`${piece} -> Composer: ${pianoPieces[piece]['composer']}, Key: ${pianoPieces[piece]['key']}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
console.log('---DIVIDER---');
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);