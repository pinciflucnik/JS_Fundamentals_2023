function arrayRotation(arr, n){
    let print = "";
    for (let i = 0; i < n; i++){
        arr.push(arr[0]);
        arr.splice(0, 1)
    }
    for (let m = 0; m < arr.length; m++){
        print += arr[m] + " ";
    }
    console.log(print);
}
arrayRotation([32, 21, 61, 1], 4)