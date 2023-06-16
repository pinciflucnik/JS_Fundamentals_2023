function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let dataArr = input.split("|");
    let dataArrLength = dataArr.length;

    for (let i = 0; i < dataArrLength; i++){
        let [command, points] = dataArr[i].split(" ");
        points = Number(points);

        switch (command){
            case "potion":
                if (health + points <= 100){
                    health += points;
                    console.log(`You healed for ${points} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else {
                    let healedPoints = 100 - health;
                    health = 100;
                    console.log(`You healed for ${healedPoints} hp.`);
                    console.log(`Current health: ${health} hp.`);

                }
                break;
            case "chest":
                bitcoins += points;
                console.log(`You found ${points} bitcoins.`);
                break;
            default : 
                let name = command;
                health -= points;
                if (health <= 0){
                    console.log(`You died! Killed by ${name}.`);
                    console.log(`Best room: ${i+1}`);
                    return;
                } else {
                    console.log(`You slayed ${name}.`);
                }
                break;
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
console.log('--');
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")