function sumOfOddNumbers(n){
    let sum = 0;
    let m = 1;
    for (i = 1; i <= n; i++){
        sum += m;
        console.log(m);
        m += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)