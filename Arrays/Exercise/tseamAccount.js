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
    index ++;
    while (input[index] !== "Play"){
        let fullCommand = input[index];
        let command = '';
        let game = '';
        for (let i = 0; i < fullCommand.length; i++){
            
        }   
    }
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])