function wordOccurences(arr) {
    let map = new Map ();
    for (let i = 0; i < arr.length; i++){
        let value = 1;
        let current = arr[i];
        if (map.has(arr[i])){
            value = map.get(arr[i]);
            map.set(arr[i], value += 1)
        } else {
            map.set(arr[i], value)
        }
    }
    let result = Array.from(map).sort((a,b) => b[1] - a[1]);
    for (let pair of result){
        console.log(`${pair[0]} -> ${pair[1]} times`);
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log(`---DIVIDER---`);
wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);