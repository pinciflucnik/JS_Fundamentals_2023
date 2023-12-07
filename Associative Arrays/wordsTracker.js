function wordsTracker(data){
    let tokens = data.shift().split(" ");
    let map = new Map();

    for (let i = 0; i < tokens.length; i++){
        let value = 0;
        for (let j = 0; j < data.length; j++){
            if(tokens[i] === data[j]){
                value ++;
                map.set(tokens[i],value);
            }
        }
    }
    let result = Array.from(map).sort((a,b) => b[1] - a[1]);
    for (let pair of result){
        console.log(`${pair[0]} - ${pair[1]}`);
    }

}
wordsTracker([
    'to',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);
    console.log(`---DIVIDER---`);
    wordsTracker([
        'the first',
        'first', 'sentence', 'Here', 'is',
        'another', 'the', 'And', 'finally', 'the',
        'the', 'sentence'])