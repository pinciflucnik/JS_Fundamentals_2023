function manOWar(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealt = Number(input.shift());
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Retire"){
        let tokens = command.split(" ");
        let action = tokens[0];
        switch (action){
            case "Fire":
                let indexToFire = Number(tokens[1]);
                let fireDamage = Number(tokens[2]);
                if (indexToFire > - 1 && indexToFire < warShip.length){
                    warShip[indexToFire] = warShip[indexToFire] - fireDamage;
                    if (warShip[indexToFire] <= 0){
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
                break;
            case "Defend":
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                let defendDamage = Number(tokens[3]);
                if (startIndex > -1 && endIndex > -1 && startIndex < pirateShip.length && endIndex < pirateShip.length){
                    for (let i = startIndex; i <= endIndex; i++){
                        pirateShip[i] -= defendDamage;
                        if(pirateShip[i] <= 0){
                            console.log(`You lost! The pirate ship has sunken.`);
                            return;
                        }
                    }
                }
                break;
            case "Repair":
                let indexToRepair = Number(tokens[1]);
                let healthPoints = Number(tokens[2]);
                if (indexToRepair > -1 && indexToRepair < pirateShip.length){
                    pirateShip[indexToRepair] += healthPoints;
                    if (pirateShip[indexToRepair] > maxHealt){
                        pirateShip[indexToRepair] = maxHealt;
                    }
                }
                break;
            case "Status":
                let count = 0;
                for (let i = 0; i < pirateShip.length; i++){
                    if (pirateShip[i] < (maxHealt * 0.2)){
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
        }


        command = input[index];
        index++;
    }
    let pirateShipSum = 0;
    for (el of pirateShip){
        pirateShipSum += el;
    }
    let warshipSum = 0;
    for (el of warShip){
        warshipSum += el;
    }
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);

}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
console.log("------------");
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);