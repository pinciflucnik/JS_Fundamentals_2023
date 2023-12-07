function wordOccurences (text){
    let wordsArr = {};
    let textLength = text.length;
    let result = [];
    for (let i  = 0; i < textLength; i++){
        if (!wordsArr.hasOwnProperty([text[i]])){
            wordsArr[text[i]] = 1;
        }
        for (let j = i+1; j < textLength; j++){
            if (text[i] === text[j]){
                wordsArr[text[i]] = wordsArr[text[i]] + 1;
            }
        }
    }
    console.log(wordsArr);
    for (let pair in wordsArr){
        console.log(wordsArr[pair]);
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence",
 "Here", "is", "another", "sentence", "And", "finally", 
 "the", "third", "sentence"])