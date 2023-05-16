function arrayManipulations(arrWithcommands){
    let arr = Array.from(arrWithcommands[0]);
    let newArr = [];
    let current = "";
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == " "){
            newArr.push(current)
            current = "";
            continue;
        }
        current += arr[i];
        if (i == arr.length-1){
            newArr.push(current);
        }
    }
    for (let m = 1; m < arrWithcommands.length; m++){
        let commandRegex = /[A-Za-z]+/g;
        let digitRegex = /[0-9]+/g;
        let command = arrWithcommands[m].match(commandRegex);
        command = command[0];
        let digit = arrWithcommands[m].match(digitRegex);
        switch (command){
            case "Add": newArr.push(digit[0]);
                break;
            case "Remove": 
                for (let n = 0; n < newArr.length; n++){
                    if (newArr[n] == digit[0]){
                        newArr.splice(n,1);
                    }
                }
                break;
            case "RemoveAt": newArr.splice(digit[0],1);
                break;
            case "Insert": newArr.splice(digit[1],0, digit[0]);
                break;
        }
    }
    current = "";
    for (let y = 0; y < newArr.length; y++){
        current += newArr[y]+" "
    }
    console.log(current);
}
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])