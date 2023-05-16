function equalSums(arr){
    let isItNo = true;
    let indexToPrint = 0;
    for (let i = 0; i < arr.length; i++){
        let sumLeft = 0;
        let sumRight = 0;
        for (let l = 0; l < i; l++){
            sumLeft += arr[l];
        }
        for (let r = i+1; r < arr.length; r++){
            sumRight += arr[r];
        }
        if (sumLeft == sumRight){
            isItNo = false;
            indexToPrint = i;
        }
    }
    if (isItNo){
        console.log("no");
    }
    else {
        console.log(indexToPrint);
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);