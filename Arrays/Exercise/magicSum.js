function magicSum(arr, n){
    for (let i = 0; i < arr.length; i++){
        for (let m = 0; m < arr.length; m++){
            if (arr[i] + arr[m] == n && i < m){
                console.log(arr[i]+" "+arr[m]);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8)