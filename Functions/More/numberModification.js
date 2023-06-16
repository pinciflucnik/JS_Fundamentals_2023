function numberModification(num){
    let stringOfNum = String(num);
    let arrOfNum = stringOfNum.split("");
    let average = 0;
    while (average <= 5){
        let sum = 0;
        for (let i = 0; i < arrOfNum.length; i++){
            let current = Number(arrOfNum[i]);
            sum += current;
        }
        average = sum / arrOfNum.length;
        if (average <= 5){
            arrOfNum.push(9);
        }
    }
    console.log(arrOfNum.join(""));
}
numberModification(5835)