function spaceTravel(input) {
    let fuel = Number(input[1]);
    let ammo = Number(input[2]);
    let commandArr = input[0].split("||");
    let index = 0;
    let command = commandArr[index];
    index++;

    while(command !== "Titan"){
        let tokens = command.split(" ");
        let action = tokens[0];
        let points = Number(tokens[1]);

        switch (action){
            case "Travel":
                fuel -= points;
                if (fuel >= 0){
                    console.log(`The spaceship travelled ${points} light-years.`);
                } else {
                    console.log(`Mission failed.`);
                    return;
                }
                break;
            case "Enemy":
                if (ammo - points >= 0){
                    ammo -= points;
                    console.log(`An enemy with ${points} armour is defeated.`);
                } else {
                    if (fuel - (points * 2) >= 0){
                        fuel -= (points * 2);
                        console.log(`An enemy with ${points} armour is outmaneuvered.`);
                    } else {
                        console.log(`Mission failed.`);
                        return;
                    }
                }

                break;
            case "Repair":
                fuel += points;
                ammo += (points * 2);
                console.log(`Ammunitions added: ${(points * 2)}.`);
                console.log(`Fuel added: ${points}.`);
                break;
        }

        command = commandArr[index];
        index++;
    }
    console.log(`You have reached Titan, all passengers are safe.`);
}
spaceTravel([ 'Travel 10||Enemy 30||Repair 15||Titan','50',

'80' ]);
console.log("---DIVIDER---");
spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',

'60',

'100']);