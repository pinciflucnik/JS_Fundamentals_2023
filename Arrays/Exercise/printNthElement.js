function printNthElement (originalArr){
    let step = Number(originalArr.pop());
    let newArr = [];
    for (let i = 0; i < originalArr.length; i += step){
        newArr.push(originalArr[i])
    }
    console.log(newArr.join(" "));
}
printNthElement(['dsa', 'asd', 'test', 'test', '2'])