function muOnline (input){
    let health = 100;
    let bitcoins = 0;
    let inputArr = input.split("|");
    let inputArrLength = inputArr.length;
    let room = 0;


    function heal(healthPoints, currentHealt){
        let healthArr = [];
        if (healthPoints + currentHealt > 100){
            healthArr.push(100);
            let healedPoints = 100 - currentHealt;
            healthArr.push(healedPoints); 
            return healthArr;
        } else {
            healthArr.push(healthPoints + currentHealt);
            healthArr.push(healthPoints);
            return healthArr;
        }
    }

    function fight(monsterName, attackPoints, health){
        let curHel = health - attackPoints;
        if (curHel > 0) {
            return  curHel;
        } else {
         console.log(`You died! Killed by ${monsterName}.`);
         return false;
        }
    }

    for (let i = 0; i < inputArrLength; i++){
        let fullCommand = inputArr[i].split(" ");
        let command = fullCommand[0];
        let points =  Number(fullCommand[1]);
        room ++;
        switch (command){
            case "potion": 
            let healthArr = heal(points,health);
            health = healthArr[0];
            let healed = healthArr[1];
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                console.log(`You found ${points} bitcoins.`);
                bitcoins += points;
                break;
            default: 
                let result = fight(command,points,health)
                if (result === false){
                    console.log(`Best room: ${room}`);
                    return;
                } else {
                    console.log(`You slayed ${command}.`);
                    health = result;
                }
                break;
        }
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);

}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")