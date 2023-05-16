function firstAndLastKNumbers(arr){
    let k = arr[0];
    let first = ""
    let last = "";
    let m = k
    for (let i = 1; i <= k; i++){
        first += arr[i]+" ";
        last += arr[arr.length - m]+" ";
        m--;
    }
    console.log(first);
    console.log(last);
}
firstAndLastKNumbers([3,
    6, 7, 8, 9])