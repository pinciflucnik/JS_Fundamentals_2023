function specialNumbers(n) {
    let isSpecial = false;
    for (let m = 1; m <= n; m++) {
        isSpecial = false;
        let sum = 0;
        stringOfNum = m.toString();
        for (let i = 0; i < stringOfNum.length; i++) {
            let digit = Number(stringOfNum[i]);
            sum += digit;
        }
        switch (sum) {
            case 5:
            case 7:
            case 11: isSpecial = true;
                break;
        }
        if (isSpecial){
            console.log(`${m} -> True`);
        }
        else {
            console.log(`${m} -> False`);
        }
    }
}