function magicMatrices(matrix){
    let isMagic = false;
    let lastSum = 0;
    for (let i = 0; i < matrix.length; i++){
        let columnSum = 0;
        let rowSum = 0;
        for (let colElement = 0; colElement < matrix.length; colElement ++){
            columnSum += matrix[colElement][i];
        }
        for (let rowElement = 0; rowElement < matrix[i].length; rowElement ++){
            rowSum += matrix[i][rowElement];
        }
        if (rowSum === columnSum){
            isMagic = true;
        } else {
            isMagic = false;
            break;
        }
        if ( i > 0 && columnSum + rowSum === lastSum){
            isMagic = true;
        }
        else if (i > 0 && columnSum + rowSum !== lastSum){
            isMagic = false;
            break;
        }
        lastSum = rowSum + columnSum;
    }   
    console.log(isMagic);
}
magicMatrices(
    [[2, 0, 0],
    [0, 0, 2],
    [0, 2, 0]])