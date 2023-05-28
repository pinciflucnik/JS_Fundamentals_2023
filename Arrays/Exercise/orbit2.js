function orbit(input) {
    let rows = Number(input[0]);
    let columns = Number(input[1]);
    let x = Number(input[2]);
    let y = Number(input[3]);
    let matrix = [];
    let currentRow = x;
    let currentCol = y;
    let counter = 1;
    let element = 2;
    for (let i = 0; i < columns; i++) {
        let row = [];
        for (let m = 0; m < rows; m++) {
            row.push()
        }
        matrix.push(row);
    }
    matrix[x][y] = 1;
    console.log(matrix);
    console.log(matrix[0]);
    console.log(matrix[1]);
    console.log(matrix[2]);
    console.log(matrix[3]);
    while (currentRow < rows && currentCol < columns || currentRow > 0 && currentCol > 0) {
        matrix[currentRow][currentCol + 1] = element;
        matrix[currentRow][currentCol - 1] = element;
        matrix[currentCol][currentRow + 1] = element;
        matrix[currentCol][currentRow - 1] = element;
        matrix[currentRow + 1][currentCol + 1] = element;
        matrix[currentRow + 1][currentCol - 1] = element;
        matrix[currentRow - 1][currentCol + 1] = element;
        matrix[currentRow - 1][currentCol - 1] = element;

        console.log('stop');


    }
    console.log(matrix);
    console.log(matrix[0]);
    console.log(matrix[1]);
    console.log(matrix[2]);
    console.log(matrix[3]);

}
orbit([4, 4, 0, 0])