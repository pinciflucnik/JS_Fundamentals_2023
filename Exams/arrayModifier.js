function arrayModifier(data) {
    let index = 0;
    let arr = data[index].split(" ").map(Number);
    index++;

    let command = data[index];
    index++;

    while (command !== "end"){
        let tokensArr = command.split(" ");
        let action = tokensArr[0];
        let index1 = Number(tokensArr[1]);
        let index2 = Number(tokensArr[2]);
        switch (action){
            case "swap": 
            let buffer1 = arr.slice(index1,index1+1);
            let buffer2 = arr.slice(index2,index2+1);
            arr[index1] = buffer2[0];
            arr[index2] = buffer1[0];
                break;
            case "multiply":
            arr[index1] = arr[index1] * arr[index2];
                break;
            case "decrease":
                arr = arr.map(x => x - 1);
                break;
        }

        command = data[index];
        index++;
    }
    console.log(arr.join(", "));
}
arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])
  console.log("---------");
  arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])
