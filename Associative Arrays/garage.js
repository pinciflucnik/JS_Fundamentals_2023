function garageInfo(data) {
    let garages = [];
    // garage.push(garageName);
    for (let i = 0; i < data.length; i++){
        let managedCarDetails = [];
        let currentData = data[i].split(" - ");
        let currentCarDetails = currentData[1].split(", ");
        let garageName = currentData[0];
        for (let j = 0; j < currentCarDetails.length; j++){
            let buffer = currentCarDetails[j].split(": ").join(" - ");
            managedCarDetails.push(buffer);
        }    
        currentCar = managedCarDetails.join(", ");
        let isSameGarage = false;
        for (element of garages){
            if (element.includes(garageName)){
                element.push(currentCar);
                isSameGarage = true;
            }
        }
        if (!isSameGarage){
            garages.push([garageName,currentCar])
        }

    }
    garages.sort((a,b) => Number(a[0]) - Number(b[0]));
    for (let i = 0; i < garages.length; i++){
        console.log(`Garage № ${garages[i][0]}`);
        for (let j = 1; j < garages[i].length; j++){
            console.log(`--- ${garages[i][j]}`);
        }
    }
}
garageInfo(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
console.log(`---DIVIDER---`);
garageInfo(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'
])