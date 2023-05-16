function arrayManipulator(originalArr, commands){
    let commandRegex = /[A-Za-z]+/;
    let secondCommandRegex = /[-]*[0-9]+/g;
    let addElementRegex = /[0-9]+$/;
    for (let i = 0; i < commands.length; i++){
        let command = commands[i].match(commandRegex).toString();
        let secondCommand = commands[i].match(secondCommandRegex);
        let addElement = Number(commands[i].match(addElementRegex));
        switch (command){
            case `add`: originalArr.splice(secondCommand[0],0,Number(addElement));
                break;
            case `addMany`: 
                for (let m = secondCommand.length -1; m > 0; m--){
                    originalArr.splice(secondCommand[0],0,Number(secondCommand[m]));
                }
                break;
            case `contains`:
                for (let n = 0; n < originalArr.length; n++){
                    if (originalArr[n] == Number(secondCommand[0])){
                        console.log(n);
                        break;
                    }
                    else {
                        console.log(`-1`);
                        break;
                    }
                }
                break;
            case `remove`: originalArr.splice(Number(secondCommand[0]),1); 
                break;
            case `shift`:
                let toUnshift = originalArr.splice(secondCommand,originalArr.length -secondCommand)
                for (let m = toUnshift.length - 1; m > -1; m--){
                    originalArr.unshift(toUnshift[m])
                }
                break;
            case `sumPairs`:
                for (let n = 0; n < originalArr.length; n++){
                    if (n+1 < originalArr.length){
                        originalArr[n] = Number(originalArr[n]) + Number(originalArr[n+1]);
                        originalArr.splice(n+1,1);
                    }
                }
                break;
            case `print`: 
            let toPrint = " ";
            for (let m = 0; m < originalArr.length; m++){
                if(m == originalArr.length-1){
                    toPrint += originalArr[m]+" ";
                    break;
                }
                toPrint += originalArr[m]+", "
            }
            console.log(`[${toPrint}]`);
                return;
        }
    }
}
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])