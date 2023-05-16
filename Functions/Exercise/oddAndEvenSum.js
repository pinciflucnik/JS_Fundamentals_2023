function oddAndEvenSum(num){
    let strOfNum = String(num);
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < strOfNum.length; i++){
        let digit = Number(strOfNum[i]);
        if (digit % 2 == 0){
            sumEven += digit;
        }
        else {
            sumOdd += digit;
        }
    }
    console.log(` Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(3495892137259234)