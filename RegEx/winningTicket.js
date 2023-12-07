function winningTicket(data) {
    let tickets = data.split(/ ?,+\ +/g);
    let winnerRegex = /[^\@\#\$\^]*(\@|\#|\$|\^){6,}[^\@\#\$\^]*(\1){6,}[^\@\#\$\^]*/g;
    let sylmbolRegex = /(\@|\#|\$|\^)/g;
    for (let ticket of tickets) {
        let isLongEnough = false;
        ticket = ticket.trim();
        if (ticket.length == 20) {
            isLongEnough = true;
            let winingTicket = winnerRegex.exec(ticket);
            let firstHalf = ticket.slice(0,10);
            let secondHalf = ticket.slice(10);
            let firstHalfMatch = firstHalf.match(sylmbolRegex);
            let secondHalfMatch = secondHalf.match(sylmbolRegex);
            equalSides = firstHalfMatch - secondHalfMatch;
            winnerRegex.lastIndex = 0;
            if (winingTicket && firstHalfMatch && secondHalfMatch && firstHalfMatch.length === secondHalfMatch.length) {
                let matchCount = ticket.match(sylmbolRegex).length;
                let matchSymbol = ticket.match(sylmbolRegex)[0];
                if (matchCount < 20){
                    console.log(`ticket "${ticket}" - ${matchCount/2}${matchSymbol}`);
                } else {
                    console.log(`ticket "${ticket}" - ${matchCount/2}${matchSymbol} Jackpot!`);
                }
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        }
        if (!isLongEnough) {
            console.log('invalid ticket');
        }
    }
}
winningTicket('Cas$$$$$$$Ca$$$$$$sh');
console.log('---DIVIDER---');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey');
console.log('---DIVIDER---');
winningTicket('validticketnomatch:(');