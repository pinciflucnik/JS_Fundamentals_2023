function searchForANumber(dataArr, commandArr) {
    let elementsToTake = Number(commandArr[0]);
    let elementToDelete = Number(commandArr[1]);
    let searchedNumber = Number(commandArr[2]);
    let counter = 0;
    let newArr = dataArr.slice(0,elementsToTake);
    newArr.splice(0,elementToDelete);
    counter = newArr.filter(e => e === searchedNumber).length;

    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searchForANumber([7, 5, 5, 8, 5, 5],
    [3, 1, 5])