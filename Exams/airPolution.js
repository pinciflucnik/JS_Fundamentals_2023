function airPolution(mapData,forces){
    function checkPolution(matrix){
        for (let row = 0; row < matrix.length; row++){
            for (let col = 0; col < matrix[row].length; col++){
                if (matrix[row][col] < 0){
                    matrix[row][col] = 0;
                }
            }
        }
        return matrix;
    }

    let mapOfSofia = [];
    for (let i = 0; i < mapData.length; i++){
        let row = mapData[i].split(" ").map(Number);
        mapOfSofia.push(row);
    }

    for (let i = 0; i < forces.length; i++){
        let tokens = forces[i].split(" ");
        let command = tokens[0];
        let value = Number(tokens[1]);
        switch (command){
            case "breeze":
                mapOfSofia[value] = mapOfSofia[value].map(x => x -15)
                mapOfSofia = checkPolution(mapOfSofia);
                break;
            case "gale":
                for (let j = 0; j < mapOfSofia.length; j++){
                    mapOfSofia[j][value] -= 20;
                }
                mapOfSofia = checkPolution(mapOfSofia);
                break;
            case "smog":
                for (let row = 0; row < mapOfSofia.length; row++){
                    for (let col = 0; col < mapOfSofia[row].length; col ++){
                        mapOfSofia[row][col] += value;
                    }
                }
                break;
        }
    }
    let polutedArr = [];
    for (let row = 0; row < mapOfSofia.length; row++){
        for (let col = 0; col < mapOfSofia[row].length; col++){
            if (mapOfSofia[row][col] >= 50){
                let element = `[${row}-${col}]`;
                polutedArr.push(element);
            }
        }
    }

    if (polutedArr.length > 0){
        console.log(`Polluted areas: ${polutedArr.join(", ")}`);
    } else {
        console.log(`No polluted areas`);
    }
}
airPolution(['5 7 2 14 4',
'21 14 2 5 3',
'3 16 7 42 12',
'2 20 8 39 14',
'7 34 1 10 24'],
['breeze 1', 'gale 2', 'smog 35'])
console.log(`Polluted areas: [2-1], [2-3], [3-1], [3-3], [4-1], [4-4]`)