function dungeonestDark(input){
    let str = input[0];
    let health = 100;
    let coins = 0;
    let arr = [];
    let current = "";
    let room = "";
    let points = "";
    let roomRegex = /^[a-z]+/sg
    let pointsRegex = /[0-9]+$/g
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) != "|"){
            current += str.charAt(i);
            if (i == str.length -1){
                arr.push(current);
            }
        }
        else if (str.charAt(i) == "|") {
            arr.push(current);
            current = "";
        }
    }
    for (let m = 0; m < arr.length; m++ ){
        room = arr[m].match(roomRegex).toString();
        points = Number(arr[m].match(pointsRegex));
        switch (room){
            case "potion": 
                if (health + points <= 100){
                    health += points;
                    console.log(`You healed for ${points} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
                else {
                    let toCalculate = points - ((health + points) - 100);
                    health = 100;
                    console.log(`You healed for ${toCalculate} hp.`);
                    console.log(`Current health: ${health} hp.`);

                }
                break;
            case "chest":
                coins += points;
                console.log(`You found ${points} coins.`);
                break;
            default:
                health -= points;
                if (health > 0){
                    console.log(`You slayed ${room}.`);
                }
                else {
                    console.log(`You died! Killed by ${room}.`);
                    console.log(`Best room: ${m+1}`);
                    return;
                }
        }
        
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])