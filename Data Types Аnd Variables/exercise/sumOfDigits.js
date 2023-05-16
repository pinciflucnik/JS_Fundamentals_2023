function sum(num){
    let stringOFNum = String(num);
    let sumOfDigits = 0;
    for (let i = 0; i < stringOFNum.length; i++){
        let digit = Number(stringOFNum[i]);
        sumOfDigits += digit;
    }
    console.log(sumOfDigits);
}
sum (97561)