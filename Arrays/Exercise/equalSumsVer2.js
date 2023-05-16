function equalSums(arr){
    let isEqual = false;
    for (let currnetNumber = 0; currnetNumber < arr.length; currnetNumber++){
        let sumOntheLeft = 0;
        let sumOnTheRight = 0;
        for (let numOnTheLeft = 0; numOnTheLeft < currnetNumber; numOnTheLeft++){
            sumOntheLeft += arr[numOnTheLeft];
        }
        for (let numOnTheRight = currnetNumber + 1; numOnTheRight < arr.length; numOnTheRight ++){
            sumOnTheRight += arr[numOnTheRight];
        }
        if (sumOntheLeft === sumOnTheRight){
            console.log(currnetNumber);
            isEqual = true;
        }
    }  
    if (!isEqual){
        console.log(`no`);
    }  
}
