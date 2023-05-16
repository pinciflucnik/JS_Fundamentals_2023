function processOddNumbers(arr){
    let newArr = [];
    let printLine = "";
    for (let i = 1; i < arr.length; i+= 2){
        let element = arr[i] * 2;
        newArr.unshift(element)
    }
    for (let m = 0; m < newArr.length; m++){
        printLine += newArr[m] + " ";
    }
    console.log(printLine);
}
processOddNumbers([3, 0, 10, 4, 7, 3])