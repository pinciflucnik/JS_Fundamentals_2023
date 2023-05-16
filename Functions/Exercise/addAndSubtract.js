function addAndSubtract(num1,num2,num3){
    let resultSum = 0
    function sum(){
         resultSum = num1+num2;
    }
    function subtract(){
        resultSum -= num3;
    }
    sum();
    subtract();
    console.log(resultSum);
}
addAndSubtract(42,
    58,
    100);
