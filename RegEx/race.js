function race(data){
    let index = 0
    let participants = data[index].split(', ');
    index++;
    let raceObj = {};
    for (const participant of participants) {
        raceObj[participant] = 0;
    }
    let command = data[index];
    index++
    let distanceRegex = /\d/g;
    let nameRegex = /[A-Za-z]+/g;
    while (command !== 'end of race'){
        let distance = 0;
        let name = '';
        let distMatch = distanceRegex.exec(command);
        let nameMatch = nameRegex.exec(command);
        while (distMatch){
            distance += Number(distMatch[0]);
            distMatch = distanceRegex.exec(command);
        }
        while (nameMatch){
            name += nameMatch[0];
            nameMatch = nameRegex.exec(command);
        }
        if (raceObj.hasOwnProperty(name)){
            raceObj[name] += distance;
        }
        command = data[index];
        index++;
    }
    let ranking = Object.entries(raceObj);
    ranking.sort((a,b) => b[1] - a[1]);

    console.log(`1st place: ${ranking[0][0]}`);
    console.log(`2nd place: ${ranking[1][0]}`);
    console.log(`3rd place: ${ranking[2][0]}`);

}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);
console.log('---DIVIDER---');
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])