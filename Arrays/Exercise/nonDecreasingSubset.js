function nonDecreasingSubset (arr){
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= currentBiggest){
            currentBiggest = arr[i];
            newArr.push(currentBiggest);
        }
    }
    console.log(newArr.join(" "));
}
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])