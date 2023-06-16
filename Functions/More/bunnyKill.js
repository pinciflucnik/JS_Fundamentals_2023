function bunnyKill(input) {

    function explode(x, y, bombBunny, matrix) {
        let previousRow = x - 1;
        let nextRow = x + 1;
        let previousCol = y - 1;
        let nextCol = y + 1;

        if (x - 1 < 0) {
            previousRow = 0;
        } else if (x + 1 > matrix.length - 1) {
            nextRow = matrix.length - 1;
        }

        if (y - 1 < 0) {
            previousCol = 0;
        } else if (y + 1 > matrix[x].length - 1) {
            nextCol = matrix[x].length - 1;
        }
        for (let row = previousRow; row <= nextRow; row++) {
            for (let col = previousCol; col <= nextCol; col++) {

                matrix[row][col] -= bombBunny;
                if (matrix[row][col] < 0) {
                    matrix[row][col] = 0;
                }
            }
        }
        return matrix;
    }

    function killAll(matrix){
        let kills = 0;
        let sum = 0;
        let resultArr = [];
        for (let i = 0; i < matrix.length; i++){
            for (element of matrix[i]){
                if (element !== 0){
                    sum += element;
                    kills++;
                }
            }
        }
        resultArr.push(sum);
        resultArr.push(kills)
        return resultArr;
    }
    let matrix = [];
    let damage = 0;
    let coordinatesArr = input[input.length - 1].split(" ");
    let totalKills = 0;
    for (let i = 0; i < input.length - 1; i++) {
        let row = input[i].split(" ").map(Number);
        matrix.push(row);
    }

    for (let i = 0; i < coordinatesArr.length; i++) {
        let bombBunnyArr = coordinatesArr[i].split(",").map(Number);
        let x = bombBunnyArr[0];
        let y = bombBunnyArr[1];
        let bombBunny = matrix[x][y];
        damage += bombBunny;

        if (bombBunny !== 0){
            matrix = explode(x, y, bombBunny, matrix);
            totalKills++;
        }
    }

    damage += killAll(matrix)[0];
    totalKills += killAll(matrix)[1];
    console.log(damage);
    console.log(totalKills);

}
bunnyKill([
'5 5 5',
'5 5 5',
'5 5 5',
'0,0 0,1'])