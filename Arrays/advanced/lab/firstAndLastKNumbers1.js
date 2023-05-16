function firstAndLastKNumbers(input){
    let arr = input;
    let k = arr[0];
    console.log(arr.slice(1, k+1));
    console.log(arr.slice(arr.length - k, arr.length));
}
firstAndLastKNumbers([3,6, 7, 8, 9])