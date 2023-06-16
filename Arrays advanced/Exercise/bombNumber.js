function bombNumbers(arr, bombArr) {
    let bomb = Number(bombArr[0]);
    let power = Number(bombArr[1]);
    let sum = 0;
    for (let index = 0; index < arr.length; index++){
        let current = Number(arr[index]);
        let blownAway = power + 1;
        let startOfSplice = 0;
        if (current == bomb){
            if (index - power >= 0){
                blownAway = power*2 + 1;
                startOfSplice = index - power;
            } else if (current !== 0){
                blownAway = Math.abs(index - power) + power + 1;
            }

            explode(arr,startOfSplice,blownAway)

            if (power == 0){
                index --;
            }
        }
    }
    for (let index = 0; index < arr.length; index++){
        sum += arr[index];
    }
    function explode(arrToModify,startIndex, waveLength){
        for (i = 1; i <= waveLength; i++){
            arrToModify.splice(startIndex,1);
        }
    }
    // console.log(sum);
    return sum;
}
bombNumbers([2,5,2,2,1], [5, 2])