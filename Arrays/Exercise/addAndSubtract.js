function addAndSubtract(arr){
    let sumOrig = 0
    let sumMod = 0
    for (let i = 0; i < arr.length; i++){
        let current = arr[i];
        sumOrig += current;
        if (current % 2 == 0 ){
            current = arr[i] + i;
        }
        else {
            current = arr[i] - i;
        }
        arr.splice(i,1,current);
    }
    for (let m=0; m < arr.length; m++){
        sumMod += arr[m];
    }
    console.log(arr);
    console.log(sumOrig);
    console.log(sumMod);
}
addAndSubtract([-5, 11, 3, 0, 2]);