function repeatString(str, repCount){
    let repeatedStr = "";
    for (let i = 0; i < repCount; i++){
        repeatedStr += str;
    }
    console.log(repeatedStr);
}
repeatString("abc", 3)