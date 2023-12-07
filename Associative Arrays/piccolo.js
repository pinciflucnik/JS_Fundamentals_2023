function piccolo(cars) {
    let parking = {};
    for (let i = 0; i < cars.length; i++){
        let [direction, number] = cars[i].split(", ");
        if (parking.hasOwnProperty(number) && direction === `OUT`){
            delete parking[number];
        } 
        else if (!parking.hasOwnProperty(number) && direction === `IN`){
            parking[number] = Number(number.slice(2,6));
        }
    }
    let parkingEntries = Object.entries(parking);
    parkingEntries.sort((a,b) => a[1] - b[1]);
    if (parkingEntries.length > 0){

    for (let [number, direction] of parkingEntries){
            console.log(number);
        }
    } else {
        console.log(`Parking Lot is Empty`);
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
console.log(`---DIVIDER---`);
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);