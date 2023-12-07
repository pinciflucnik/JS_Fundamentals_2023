function plantDiscovery(input){
    let plantCoount = Number(input.shift());
    let plantObj = {};
    for (let i = 0; i < plantCoount; i++) {
        let currentPlantArr = input.shift().split('<->');
        let plantName = currentPlantArr[0];
        let plantRarity = Number(currentPlantArr[1]);
        plantObj[plantName] = {
            'rarity': plantRarity,
            'rating': []
        }
    }
    let index = 0;
    let line = input[index];
    index++;
    while (line !== 'Exhibition'){
        let tokens = line.split(': ');
        let command = tokens[0];
        let plant = (tokens[1].split(' - '))[0];
        let isInList = plantObj.hasOwnProperty(plant);
        if (!isInList){
            console.log('error');
            line = input[index];
            index++;
    
            continue;
        }
        switch (command){
            case 'Rate':
                let curRating = Number((tokens[1].split(' - '))[1]);
                plantObj[plant]['rating'].push(curRating);
                break;
            case 'Update':
                let newRarity = Number((tokens[1].split(' - '))[1]);
                plantObj[plant]['rarity'] = newRarity;
                break;
            case 'Reset':
                plantObj[plant]['rating'] = [];
                break;
        }
        line = input[index];
        index++;
    }
    console.log('Plants for the exhibition:');
    for (let plant in plantObj) {
        let sum = 0;
        let avrRating = 0;
        let ratingLength = plantObj[plant]['rating'].length;
        if (ratingLength > 0){
        for (const rating of plantObj[plant]['rating']) {
            sum += rating;
        }
            avrRating = sum / ratingLength;
    }
        console.log(`- ${plant}; Rarity: ${plantObj[plant]['rarity']}; Rating: ${avrRating.toFixed(2)}`);
    }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);
console.log('---DIVIDER---');
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]);