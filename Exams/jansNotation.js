function jansNotation(data) {
    function calculate(operandsArr, operator) {
        let a = operandsArr[operandsArr.length - 2];
        let b = operandsArr[operandsArr.length - 1];
        if (operandsArr.length - 2 < 0) {
           return console.log(`Error: not enough operands!`);

        } else {
            switch (operator) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    result = a / b;
                    break;
            }
            return result;
        }
    }

    let operandsArr = [];
    let operatorsArr = [];
    let operator = "";
    for (let i = 0; i < data.length; i++) {
        let result = 0;
        let current = Number(data[i]);
        if (!current) {
            operatorsArr.push(data[i]);
            operator = data[i];
            result = calculate(operandsArr,operator);
            operandsArr.splice(operandsArr.length - 2, 2, result);
        } else {
            operandsArr.push(current);
        }
    }

    if (operandsArr.length > 1){
        console.log(`Error: too many operands!`);
        return;
    }
    if (operandsArr[0] === undefined ){
        return;
    }
    console.log(operandsArr[0]);
}
jansNotation([31,
    2,
    '+', 11, "/"
]);
jansNotation([3,
    4,
    '+']);
jansNotation([5,
    3,
    4,
    '*',
    '-']);
jansNotation([7,
    33,
    8,
    '-']);
jansNotation([15,
    '/'])