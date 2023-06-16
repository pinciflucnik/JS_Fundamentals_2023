function movingTarget(arr){
    let index = 0;
    let targetsArr = arr[index].split(" ").map(Number);
    index++;

    let fullCommand = arr[index];
    index++;

    while (fullCommand !== "End"){
        let commandArr = fullCommand.split(" ");
        let command = commandArr[0];
        let commandIndex = Number(commandArr[1]);
        let power = Number(commandArr[2]);
        let isValidIndex = false;
        let isValidRadius = false;
        if (commandIndex < targetsArr.length && commandIndex >= 0){
            isValidIndex = true;
        }
        if (commandIndex - power >= 0 && commandIndex + power < targetsArr.length){
            isValidRadius = true;
        }


        
        switch (command){
            case "Shoot":
                if (isValidIndex){
                    targetsArr[commandIndex] -= power;
                }
                if (targetsArr[commandIndex] <= 0){
                    targetsArr.splice(commandIndex,1);
                }
                break;
            case "Add":
                if (isValidIndex){
                    targetsArr.splice(commandIndex,0,power);
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case "Strike":
                if (isValidIndex){
                    if(isValidRadius){
                        let toBeStriked = (2 * power) + 1;
                        let startIndex = commandIndex - power;
                        targetsArr.splice(startIndex,toBeStriked);
                    } else {
                        console.log(`Strike missed!`);
                    }
                } else {
                    console.log(`Strike missed!`);
                }
                break;
        }

        fullCommand = arr[index];
        index++;
    }
    // let printArr = []
    // for (element of targetsArr){
    //     if (element > 0){
    //         printArr.push(element);
    //     }
    // }
    return     console.log(targetsArr.join("|"));
}
movingTarget(["12 0 0 44 0 42 0",
"Shoot 3 3",
"End"])