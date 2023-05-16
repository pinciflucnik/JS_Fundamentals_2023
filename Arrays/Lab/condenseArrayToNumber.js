function condenseArrayToNumber(arr){
    while ( arr.length > 1){
        for (let i = 0; i < arr.length; i++){
            arr[i] = arr[i] + arr[i+1];
        }
        arr.splice(arr.length-1,1);
    }

    console.log(arr[0]);
}
condenseArrayToNumber([1])