function train(input){
    let inputLength = input.length;

    let index = 0;

    let wagonsArr = input[index].split(" ");
    index++;

    let wagonCapacity = Number(input[index]);
    index++;

    while (index < inputLength){
        let command = input[index].split(" ");
        index ++;

        if(command[0] == "Add"){
            wagonsArr.push(command[1]);
        } else {
            command = Number(command);
            for(let wagonIndex = 0; wagonIndex < wagonsArr.length; wagonIndex++){
                let current = Number(wagonsArr[wagonIndex]);
                if (current + command <= wagonCapacity){
                    wagonsArr[wagonIndex] = current + command;
                    break;
                }
            }
        }
    }
    console.log(wagonsArr.join(" "));
}
train (['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])