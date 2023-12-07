function needForSpeedIII(input){
    let carsCount = Number(input.shift());
    let garage = {};
     for (let i = 0; i < carsCount; i++){
        let tokens = input.shift().split('|');
        let carBrand = tokens[0];
        let mileage = Number(tokens[1]);
        let fuelLevel = Number(tokens[2]);
        garage[carBrand] = {
            'mileage': mileage,
            'fuel': fuelLevel
        }
     }
     let index = 0;
     let line = input[index];
     index++;
     while (line !== 'Stop'){
        let tokens = line.split(' : ');
        let command = tokens[0];
        let car = tokens[1];
        if (!garage.hasOwnProperty(car)){
            line = input[index];
            index++;
            continue;
        }
        switch (command){
            case 'Drive':
                let distance = Number(tokens[2]);
                let fuelNeeded = Number(tokens[3]);
                if (garage[car]['fuel'] < fuelNeeded){
                    console.log(`Not enough fuel to make that ride`);
                    break;
                }
                garage[car]['mileage'] += distance;
                garage[car]['fuel'] -= fuelNeeded;
                console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                if (garage[car]['mileage'] >= 100000){
                    console.log(`Time to sell the ${car}!`);
                    delete garage[car];
                }
                break;
            case 'Refuel':
                    let fuel = Number(tokens[2]);
                    let fuelLevel = garage[car]['fuel'];
                    if (fuelLevel + fuel > 75){
                        fuel = 75 - fuelLevel;
                    }
                    garage[car]['fuel'] += fuel;
                    console.log(`${car} refueled with ${fuel} liters`);
                break;
            case 'Revert':
                let kilometers = Number(tokens[2]);
                if (garage[car]['mileage'] - kilometers < 10000){
                    garage[car]['mileage'] = 10000;
                    break;
                }
                garage[car]['mileage'] -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                break;
        }
        line = input[index];
        index++;
     }
     for (const car in garage) {
        console.log(`${car} -> Mileage: ${garage[car]['mileage']} kms, Fuel in the tank: ${garage[car]['fuel']} lt.`);
     }
}
needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]);
console.log('---DIVIDER---');
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);
