function negativeOrPositiveNumbers(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let current = Number(arr[i]);
        if (current >= 0){
            newArr.push(current)
        }
        else {
            newArr.unshift(current)
        }
    }
    for (let m = 0; m < newArr.length; m++){
        console.log(newArr[m]);
    }
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])