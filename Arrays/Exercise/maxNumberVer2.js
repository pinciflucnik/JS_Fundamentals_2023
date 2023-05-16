function maxNumberVer2(arr){
    let printLine = "";
    for (let i = 0; i < arr.length; i++){
        let isMAx = false;
        for (let m = i+1; m < arr.length; m++){
            if (arr[i] > arr[m]){
                isMAx = true;
            }
            else {
                isMAx = false;
                break;
            }
        }
        if (isMAx){
            printLine += `${arr[i]} `
        }
    }    
    printLine += arr[arr.length-1];
    console.log(printLine);
}