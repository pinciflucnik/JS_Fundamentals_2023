function calculator(num1, oper, num2){
    let result = 0;
    switch (oper){
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': result = num1 / num2;
            break;
    }
    console.log(result.toFixed(2));
}
calculator(25.5,
    '-',
    3)