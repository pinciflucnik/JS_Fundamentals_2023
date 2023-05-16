function bitcoin(shift){
    let totalDaysMined = shift.length;
    let daysCounter = 0;
    let daysCounter1 = 0;
    let totalMoney = 0;
    let bitcoins = 0;
    let firsbitcoin = 0;

    for (let i = 0; i <= totalDaysMined -1; i++){
        daysCounter ++;
        daysCounter1 ++
        let dayGrams = shift[i];
        if (daysCounter === 3){
            dayGrams *= 0.7;
            daysCounter = 0;
        }
        let dayMoney = dayGrams * 67.51;
        totalMoney += dayMoney;
        if (totalMoney >= 11949.16){
            bitcoins ++;
            totalMoney -= 11949.16;
            if (bitcoins === 1){
                firsbitcoin = daysCounter1;
            }
            while (totalMoney >= 11949.16){
                bitcoins ++;
                totalMoney -= 11949.16;

            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${firsbitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoin([3124.15,504.212,2511.124])