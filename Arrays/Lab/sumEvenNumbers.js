function sumEven(arr){
    let sum = 0;
    for (let i = 0; i< arr.length; i++){
        let current = Number(arr[i]);
        if (current % 2 == 0){
            sum += current;
        }
    }
    console.log(sum);
}
sumEven(['3','5','7','9'])