function treasureHunt(input) {
    let index = 0;
    let treasureChest = input[index].split("|");
    index++;
    let command = input[index];
    index++;

    while (command !== "Yohoho!"){
        let tokens = command.split(" ");
        let action = tokens[0];

        switch (action){
            case "Loot":
                for (let i = 1; i < tokens.length; i++){
                    let item = tokens[i];
                    if (treasureChest.indexOf(item) == -1){
                        treasureChest.unshift(item);
                    }
                }
                break;
            case "Drop":
                let indexToDrop = Number(tokens[1]);
                if (indexToDrop > -1 && indexToDrop < treasureChest.length){
                    let buffer = treasureChest.splice(indexToDrop, 1);
                    treasureChest.push(buffer[0]);
                }
                break;
            case "Steal":
                let count = Number(tokens[1]);
                let startIndex = (treasureChest.length) - count;
                if (startIndex < 0){
                    startIndex = 0;
                }
                let stolen = treasureChest.splice(startIndex,count);
                console.log(stolen.join(", "));
                break;
        }
        command = input[index];
        index++;
    }

    let lengthArr = treasureChest.map(x => x.length);
    let sumLength = 0;
    for (let i = 0; i < lengthArr.length; i++){
        sumLength += lengthArr[i];
    }
    let average = sumLength / treasureChest.length;

    if (treasureChest.length > 0){

        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }

}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]);
console.log('------------');
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);