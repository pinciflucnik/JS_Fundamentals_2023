function diagonalAttack (arr){
    let matrix = [];
    for (let i = 0; i < arr.length; i++){
        let row = [];
        let element = '';
        for (let m = 0; m < arr[i].length; m++){
            let currentElement = arr[i][m];
            if (currentElement !== " "){
                element += currentElement;
            } else {
                row.push(Number(element));
                element = '';
            }
        }
        row.push(Number(element));
        matrix.push(row);
    }
    let columnCount = matrix[0].length;
    let rowsCount = matrix.length;
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < rowsCount; i++){
        sum1 += matrix[i][i];
        sum2 += matrix[i][columnCount -1];
        columnCount--;
    }
    if (sum1 === sum2){
        let toSkip = matrix[0].length - 1;
        for (let i = 0; i < matrix.length; i++){
            for (let m = 0; m < matrix[i].length; m++){
                if (m === toSkip){
                    toSkip --;
                    continue;
                }
                else if (m === i){
                    continue;
                } else {
                    matrix[i][m] = sum1;
                }
            }
        }
        for (let i = 0; i < matrix.length; i++){
            console.log(matrix[i].join(" "));
        }
    } else {
        for (let i = 0; i < matrix.length; i++){
            console.log(matrix[i].join(" "));
        }
    }
}
diagonalAttack(
['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'])