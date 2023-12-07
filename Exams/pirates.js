function pirates(input) {
    let index = 0;
    let line = input[index];
    index++;
    let cities = {};
    while (line !== 'Sail') {
        let tokens = line.split('||');
        let name = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        if (!cities.hasOwnProperty(name)) {
            cities[name] = {
                'population': population,
                'gold': gold
            }
        } else {
            cities[name]['population'] += population;
            cities[name]['gold'] += gold;
        }
        line = input[index];
        index++;
    }
    if (line === 'Sail') {
        line = input[index];
        index++;
    }
    while (line !== 'End') {
        let tokens = line.split('=>');
        let command = tokens[0];
        let name = tokens[1];
        switch (command) {
            case 'Plunder':
                let peopleKilled = Number(tokens[2]);
                let goldStolen = Number(tokens[3]);
                if (cities[name]['population'] - peopleKilled < 0) {
                    peopleKilled = cities[name]['population'];
                }
                if (cities[name]['gold'] - goldStolen < 0) {
                    goldStolen = cities[name]['gold'];
                }
                cities[name]['population'] -= peopleKilled;
                cities[name]['gold'] -= goldStolen;
                console.log(`${name} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);
                if (cities[name]['population'] <= 0 || cities[name]['gold'] <= 0) {
                    console.log(`${name} has been wiped off the map!`);
                    delete cities[name];
                }
                break;
            case 'Prosper':
                let goldAdded = Number(tokens[2]);
                if (goldAdded < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                    break;
                }
                cities[name]['gold'] += goldAdded;
                console.log(`${goldAdded} gold added to the city treasury. ${name} now has ${cities[name]['gold']} gold.`);
                break;
        }
        line = input[index];
        index++;

    }
    let citiesLeft = Object.keys(cities).length
    if (citiesLeft > 0) {
        console.log(`Ahoy, Captain! There are ${citiesLeft} wealthy settlements to go to:`);
        for (const city in cities) {
            console.log(`${city} -> Population: ${cities[city]['population']} citizens, Gold: ${cities[city]['gold']} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"
// ]);
console.log('---DIVIDER---');
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);