function integerAndFloat(num1,num2,num3){
    let sum = num1 + num2 + num3;
    sum % 1 === 0 ? sum = sum + ` - Integer` : sum = sum + ` - Float`
    console.log(sum);
}
integerAndFloat(9, 100, 1)