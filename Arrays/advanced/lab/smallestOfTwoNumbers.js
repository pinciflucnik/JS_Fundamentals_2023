function smallesOfTwoNumbers(arr){
    // let smallest = Number.MAX_SAFE_INTEGER;
    // let secondToSmallest = Number.MAX_SAFE_INTEGER;
    // for (let i = 0; i < arr.length; i++){
    //     let current = arr[i];
    //     if (current <= smallest){
    //         secondToSmallest = smallest;
    //         smallest = current;
    //     }
    // }
    // console.log(`${smallest} ${secondToSmallest}`);
    let toPrint = ""
    let sorted = arr.sort((a,b) => {
        return a - b;
    })
    toPrint += arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != arr[0]){
            toPrint += " "+arr[i];
            break;
        }
    }
    console.log(toPrint);

}
smallesOfTwoNumbers([3, 0, 10,0, 4, 7, 3])