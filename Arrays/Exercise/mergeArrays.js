function mergeArrays(arr1, arr2){
    let arr3=[];
    for (let i = 0; i < arr1.length; i++){
        for (let m = 0; m < arr2.length; m++){
            let currentResult = "";
            if (i % 2 == 0 && m % 2 == 0 && i == m){
                currentResult = Number(arr1[i]) + Number(arr2[m])
                arr3.push(currentResult);
            }
            else if (i % 2 == 1 && m % 2 == 1 && i == m){
                currentResult = arr1[i] + arr2[m];
                arr3.push(currentResult);

            }
        }
    }
    let printLine = arr3[0];
    for (let a = 1; a < arr3.length; a++){
        printLine += " - " + arr3[a];
    }
    console.log(printLine);
}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])