function dungeonestDark(input) {
    let healt = 100;
    let coins = 0;
    let string = input[0];
    let currenElement = "";
    let monsterRegex = /[A-Za-z]+/;
    let pointsRegex = /[0-9]+/;
    let monsterArr = [];
    let pointsArr = [];
    let monster = '';
    let points = '';
    let roomCount = 0;
    for (let i = 0; i < string.length; i++) {
        let current = string[i];
        if (string[i] != "|") {
            currenElement += current;
        }
        if (current === "|") {
            monster = currenElement.match(monsterRegex);
            points = currenElement.match(pointsRegex);
            monster = monster.toString();
            points = Number(points.toString());
            monsterArr.push(monster);
            pointsArr.push(points);
            currenElement = "";
        }
    }
    monster = currenElement.match(monsterRegex);
    points = currenElement.match(pointsRegex);
    monster = monster.toString();
    points = Number(points.toString());
    monsterArr.push(monster);
    pointsArr.push(points);

    for (let currentRoom = 0; currentRoom < monsterArr.length; currentRoom ++){
        roomCount ++;
        switch (monsterArr[currentRoom]){
            case "potion":
                 healt = healt + pointsArr[currentRoom];
                 if (healt > 100){
                    let healedPoints = pointsArr[currentRoom] - (healt - 100);
                    healt = 100;
                    console.log(`You healed for ${healedPoints} hp.`);
                    console.log(`Current health: ${healt} hp.`);
                    break;
                 }
                 console.log(`You healed for ${pointsArr[currentRoom]} hp.`);
                 console.log(`Current health: ${healt} hp.`);
                 break;
            case "chest": 
                coins += pointsArr[currentRoom]; 
                console.log(`You found ${pointsArr[currentRoom]} coins.`);
                break;
            default:
                 healt -= pointsArr[currentRoom];
                 if (healt > 0){
                    console.log(`You slayed ${monsterArr[currentRoom]}.`);
                 } else {
                    console.log(`You died! Killed by ${monsterArr[currentRoom]}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                 }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${healt}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])