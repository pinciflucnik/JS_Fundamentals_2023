function orbit(input) {
    let rows = Number(input[0]);
    let columns = Number(input[1]);
    let x = Number(input[2]);
    let y = Number(input[3]);
    let matrix = [];
    let currentRow = 0;
    let currentCol = 0;
    for (let i = 0; i < columns; i++) {
        let row = [];
        for (let m = 0; m < rows; m++) {
            row.push()
        }
        matrix.push(row);
    }
    let elementBefore = 1
    matrix[x][y] = elementBefore;
    elementBefore = y + 1;
    let elementAfter = 2;
    for (let i = 0; i < columns; i++) {
        if (i != y && i < y) {
            matrix[x][i] = elementBefore;
            elementBefore--;
        } else if (i !== y && i > y) {
            matrix[x][i] = elementAfter;
            elementAfter ++;
        }
    }
    elementBefore = y + 1;
    elementAfter = 2;

    for (let m = x -1; m >= 0; m--){
        for (let i = 0; i < columns; i++) {
            if (i != y && i < y) {
                matrix[m][i] = elementBefore;
                elementBefore--;
            }
            else if( i == y){
                elementBefore++;
                matrix[m][i] = elementBefore
            }
            else if (i !== y && i > y) {
                matrix[m][i] = elementAfter;
                elementAfter ++;
            }
        }
        elementBefore = y + 1;
        elementAfter = 2;    
    }
    console.log(matrix);
    console.log(matrix[0]);
    console.log(matrix[1]);
    console.log(matrix[2]);
    console.log(matrix[3]);
}
orbit([4, 4, 3, 2])