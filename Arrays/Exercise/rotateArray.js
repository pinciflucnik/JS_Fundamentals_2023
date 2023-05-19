function rotateArray (originalArr){
    let rotations = Number(originalArr.pop());
    for (let i = 0; i < rotations; i++){
        originalArr.unshift(originalArr[originalArr.length - 1]);
        originalArr.pop();
    }
    console.log(originalArr.join(" "));
}
rotateArray(['Banana', 'Orange', 'Coconut',
'Apple', '15'])