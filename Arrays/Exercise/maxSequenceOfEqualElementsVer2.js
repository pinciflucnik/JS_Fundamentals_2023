function maxSequenceOfEqualElements(arr){
    let printedLine = ""
    let max = 0;
    let newArr = [];
    let thirdArr = [];
    let currentMax = 1;
    for (let i = 0; i < arr.length; i++){
        if (newArr.length > thirdArr.length){
            thirdArr = newArr;
        }
        if (arr[i] == arr[i-1]){
            currentMax ++;
            if (currentMax >= max && currentMax == 2){
                max = currentMax;
                newArr = [];
                newArr.push(arr[i]);
                newArr.push(arr[i-1]);
            }
            else if (currentMax > 2){
                newArr.push(arr[i])
            }
        }
        else {
            currentMax = 1;
        }
        
    }
    console.log(thirdArr.join(` `));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])