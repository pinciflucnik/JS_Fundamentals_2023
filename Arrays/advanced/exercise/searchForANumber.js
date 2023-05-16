function searchForANumber (originalArr, commands){
    let take = commands[0];
    let deleteElements = commands[1];
    let searchedNumber = commands[2];
    let newArr = [];
    let counter = 0;
    for (let i = 0; i < take; i++){
        newArr.push(originalArr[i])
    }
    newArr.splice(0,deleteElements);
    for (let m = 0; m < newArr.length; m++){
        if (searchedNumber == newArr[m]){
            counter ++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])