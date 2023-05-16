function bombNumbers(arr, bombArr){
    let bomb = Number(bombArr[0]);
    let power = Number(bombArr[1]);
    let sum = 0;
    if (power > 0){
        for (let i=0; i < arr.length; i++){
            let current = arr[i];
            if (current == bomb){
                if (i-power >= 0){
                    arr.splice(i-power,2*power + 1);
                    i = -1;
                }
                else {
                    arr.splice(0,power+1);
                    i = -1;
                }
            }
        }
    }
    for (let n = 0; n < arr.length; n++){
        sum += Number(arr[n]);
    }
    console.log(sum);

}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [-1, 0])