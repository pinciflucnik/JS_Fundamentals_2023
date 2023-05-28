function spiralMatrix(columns, rows) {
    let matrix = [];
    currentElement = 1;
    let currentRow = 0;
    let currentColumn = 0;
    for (let i = 0; i < columns; i++) {
        let row = [];
        for (let m = 0; m < rows; m++) {
            row.push();
        }
        matrix.push(row);
    }
    while (currentRow < rows && currentColumn < columns) {
        for (let i = currentColumn; i < columns; i++) {
            matrix[currentRow][i] = currentElement;
            currentElement++;
        }
        currentRow++;
        for (let i = currentRow; i < rows; i++) {
            matrix[i][columns - 1] = currentElement;
            currentElement++
        }
        columns--;
        for (let i = columns - 1; i >= currentColumn; i--) {
            matrix[rows - 1][i] = currentElement;
            currentElement++;
        }
        rows--;
        for (let i = rows - 1; i >= currentRow; i--) {
            matrix[i][currentColumn] = currentElement;
            currentElement++;
        }
        currentColumn++;
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}
spiralMatrix(5, 5)