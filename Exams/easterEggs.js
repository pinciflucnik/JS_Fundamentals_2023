function easterEggs(input){
    let validPattern = /[@|#]+(?<colour>[a-z]{3,})[@|#]+[^A-Za-z0-9]*[\/]+(?<amount>[\d]+)[\/]+/g;
    let eggsPath = input.shift();
    let match = validPattern.exec(eggsPath);
    while(match){
        console.log(`You found ${match.groups.amount} ${match.groups.colour} eggs!`);
        match = validPattern.exec(eggsPath);
    }
}
easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
console.log('---DIVIDER---');
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);