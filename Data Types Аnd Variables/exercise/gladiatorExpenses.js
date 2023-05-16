function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expenses = 0;
    let shield = 0;
    for (let i = 1; i <= lostFights; i++){
        let helmet = 0;
        let sword = 0;
        if (shield == 2){
            shield = 0;
        }
        if (i % 2 == 0){
            helmet ++;
            expenses += helmetPrice;
        }
        if (i % 3 == 0){
            sword ++;
            expenses += swordPrice;
        }
        if (helmet != 0 && sword != 0){
            shield++
            expenses += shieldPrice;
        }
        if (shield != 0 && shield % 2 == 0){
            expenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)