function counterStrike(arr){
    let index = 0;
    let energy = Number(arr[index]);
    index ++;
    let command = arr[index];
    index++;
    let count = 0;

    while (command !== "End of battle"){
        let distance = Number(command);
        energy -= distance;
        if (energy < 0){
            energy += distance;
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            break;
        }
        count++
        if (count % 3 === 0){
            energy += count;
        }

        command = arr[index];
        index ++;
    }
    if (command === "End of battle"){
        console.log(`Won battles: ${count}. Energy left: ${energy}`);
    }
}
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])