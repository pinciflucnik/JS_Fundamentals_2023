function memoryGame(input) {
    let gameBoard = input.shift().split(" ");
    let index = 0;
    let command = input[index];
    index++;
    let movesCounter = 0;

    while (command !== "end"){
        movesCounter++;
        let [index1, index2] = command.split(" ").map(Number);

        if ((index1 > -1 && index2 > -1) && (index1 < gameBoard.length && index2 < gameBoard.length) && (index1 !== index2)){
            if (gameBoard[index1] == gameBoard[index2]){
                console.log(`Congrats! You have found matching elements - ${gameBoard[index1]}!`);
                if (index1 > index2){
                    gameBoard.splice(index1,1);
                    gameBoard.splice(index2,1)

                } else {

                    gameBoard.splice(index2,1);
                    gameBoard.splice(index1,1)
                }
            } else {
                console.log(`Try again!`);
            }

        } else {
            let middle = gameBoard.length / 2;
            gameBoard.splice(middle,0, `-${movesCounter}a`);
            gameBoard.splice(middle,0, `-${movesCounter}a`)
            console.log(`Invalid input! Adding additional elements to the board`);
        }
        if (gameBoard.length == 0){
            console.log(`You have won in ${movesCounter} turns!`);
            return;
        }

        command = input[index];
        index++;
    }
    console.log(`Sorry you lose :(`);
    console.log(gameBoard.join(" "));
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]);
console.log('---DIVIDER---');
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);
console.log('---DIVIDER---');
memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);
