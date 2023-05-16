function amazingNumbers(num) {
    let sum = 0;
    let stringNum = num.toString();
    let isTrue = false;
 
    for (let i = 0; i < stringNum.length; i++) {
        let digit = Number(stringNum[i]);
        sum += digit;
    }
    let stringSum = sum.toString();
    for (m = 0; m < stringSum.length; m++) {
        let check = stringSum[m];
        switch (check) {
            case "9": console.log(`${num} Amazing? True`);
                isTrue = true;
                return;
        }
    }
    if (!isTrue) {
        console.log(`${num} Amazing? False`);
    }
 
}
amazingNumbers(1222)