function perfectNumber(num){
    let isPerfect = false;
    let sum = 0;
    if (num % 2 == 1){
        return console.log(`It's not so perfect.`);
    }
    else {
        for (let i = 1; i <= num/2 -1; i++){
            if (num % i == 0){
                sum += i;
            }
        }
    }
    if (sum == num/2 && num >= 0){
        isPerfect = true;
    }
    if (isPerfect){
        console.log(`We have a perfect number!`);
    }
    else {
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(6)