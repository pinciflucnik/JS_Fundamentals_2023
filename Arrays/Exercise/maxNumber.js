function maxNumber(arr){
    let toPrint = "";
    for (let i = 0; i < arr.length; i++){
        let maxNum = false;
        for (let m = i + 1; m < arr.length; m++){
            if (arr[i] > arr[m]){
                maxNum = true;
            }
            else {
                maxNum = false;
                break;
            }
        }
        if (maxNum){
            toPrint += arr[i] + " "
        }
    }
    toPrint += arr[arr.length -1]
    console.log(toPrint);
}
maxNumber([14, 24, 3, 19, 15, 17])