function rightPlace([word, char, check]){
    let result = word.replace("_", char);
    check = check.toString();
    if (result === check){
        console.log(`Matched`);
    }
    else {
        console.log(`Not Matched`);
    }
}
rightPlace(['Str_ng', 'i', String])