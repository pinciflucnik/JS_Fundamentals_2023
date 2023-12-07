function thePianist(input){
    let n = Number(input.shift());
    let list = {};
    for (let i = 0; i < n; i++){
        let [piece, composer, key] = input.shift().split('|');
        list[piece] = {
            composer,
            key
        }
    }
    for (const element of input) {
        if (element === 'Stop'){
            break;
        }
        let tokens = element.split('|');
        let command = tokens[0];
        let piece = tokens[1];
        let isInList = list.hasOwnProperty(piece);
        switch (command){
            case 'Add':
                if (isInList){
                    console.log(`${piece} is already in the collection!`);
                    break;
                }
                let composer = tokens[2];
                let key = tokens[3];

                list[piece] = {
                    composer,
                    key
                }

                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                break;
            case 'Remove':
                if (!isInList){
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
                }
                delete list[piece];
                console.log(`Successfully removed ${piece}!`);
                break;
            case 'ChangeKey':
                let newKey = tokens[2];
                if(!isInList){
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
                }
                list[piece]['key'] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
                break
        }
    }
    for (const piece in list) {
        let key = list[piece]['key'];
        let composer = list[piece]['composer'];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
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