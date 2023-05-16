function evenOdd(arr){
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++){
        let current = Number(arr[i]);
        if (current % 2 == 0){
            sumEven += current;
        }
        else {
            sumOdd += current;
        }
    }
    console.log(sumEven - sumOdd);
}
evenOdd([3,5,7,9])