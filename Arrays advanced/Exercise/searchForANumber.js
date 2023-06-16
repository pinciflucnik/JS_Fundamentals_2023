function searchForANumber(dataArr, commandArr) {
    let elementsToTake = Number(commandArr[0]);
    let elementToDelete = Number(commandArr[1]);
    let searchedNumber = Number(commandArr[2]);
    let counter = 0;

    function takeElements (arr, elementsCount){
        let alteredArr = [];
        for (let index = 0; index < elementsCount; index++){
            alteredArr.push(arr[index]);
        }
        return alteredArr;
    }
    function deleteElements (arr, elementsCount){
         arr.splice(0,elementsCount);
         return arr;
    }
    
    let newArr = takeElements(dataArr,elementsToTake);

    newArr = deleteElements(newArr,elementToDelete);

    for (let index = 0; index < newArr.length; index++){
        let current = Number(newArr[index]);
        if (current === searchedNumber){
            counter++;
        }
    }
    // console.log(`Number ${searchedNumber} occurs ${counter} times.`);
    return `Number ${searchedNumber} occurs ${counter} times.`;
}
searchForANumber([7, 5, 5, 8, 5, 5],
    [3, 1, 5])