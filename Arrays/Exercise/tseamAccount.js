function tseamAccount (input){
    let gamesArr = [];
    let currentElement = "";
    let index = 0;
    for (let i = 0; i < input[index].length; i++){
        let gamesList = input[index];
        if (gamesList[i] != " "){
            currentElement += gamesList[i];
        } else {
            gamesArr.push(currentElement);
            currentElement = "";
        }
    }
    gamesArr.push(currentElement);
    index ++;
    while (input[index] !== "Play!"){
        let fullCommand = input[index];
        let command = '';
        let game = '';
        for (let i = 0; i < fullCommand.length; i++){
            if (fullCommand[i] !== " "){
                game += fullCommand[i];
            }
            else {
                command = game;
                game = '';
            }
        } 
        let isInList = false;
        let inListIndex = 0
        for (let i = 0; i < gamesArr.length; i++){
            let currentGame = gamesArr[i];
        
            if (currentGame === game){
                isInList = true;
                inListIndex = i;
            }
        }
        switch (command){
            case "Install":
                if (!isInList){
                    gamesArr.push(game);
                }
                break;
            case "Uninstall":
                if (isInList){
                    gamesArr.splice(inListIndex,1);
                } 
                break;
            case "Update":
                if (isInList){
                    gamesArr.push(game);
                    gamesArr.splice(inListIndex,1);
                }
                break;
            case "Expansion": 
            let expansionType = '';
            let gameForExpansion = ''
            for (let i = 0; i < game.length; i++){
                if (game[i] !== "-"){
                    expansionType += game[i];
                }
                else {
                    gameForExpansion = expansionType;
                    expansionType = '';
                }
            }
                if (gamesArr.includes(gameForExpansion)){
                    gamesArr.splice(inListIndex + 1,0,`${gameForExpansion}:${expansionType}`)
                }
                break;
        }
        index ++;
    }
    console.log(gamesArr.join(" "));
}
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!'])