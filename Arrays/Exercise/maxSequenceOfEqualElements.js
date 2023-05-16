function maxSequenceOfEqualElements(arr){
    let printedLine = ""
    let max = 0;
    let newArr = [];
    let thirdArr = [];
    let currentMax = 1;
    for (let i = 0; i < arr.length; i++){
        if (newArr.length > thirdArr.length){
            thirdArr = newArr;
        }
        if (arr[i] == arr[i-1]){
            currentMax ++;
            if (currentMax >= max && currentMax == 2){
                max = currentMax;
                newArr = [];
                newArr.push(arr[i]);
                newArr.push(arr[i-1]);
            }
            else if (currentMax > 2){
                newArr.push(arr[i])
            }
        }
        else {
            currentMax = 1;
        }
        
    }
    for (let m = 0; m < thirdArr.length; m++){
        printedLine += thirdArr[m]+" "
    }
    console.log(printedLine);
}
maxSequenceOfEqualElements([4, 4, 4, 4])