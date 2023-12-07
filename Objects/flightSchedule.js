function flightSchedule(data) {
    let schedule = {};
    let flightsArr = data[0];
    let statusArr = data[1];
    let flightsArrLength = flightsArr.length;
    let statusArrLength = statusArr.length;
    for (i = 0; i < flightsArrLength; i++) {
        let tokens = flightsArr[i].split(" ");
        let code = tokens.shift();
        let destination = tokens.join(" ");
        schedule[code] = {
            "Destination": destination,
            "Status": "Ready to fly"
        }
    }
    for (let i = 0; i < statusArrLength; i++) {
        let [flightNum, status] = statusArr[i].split(" ");
        if (schedule.hasOwnProperty(flightNum)) {
            schedule[flightNum].Status = status;
        }
    }
    for (element in schedule) {
        for (let i = 0; i < data[2].length; i++) {
            let current = data[2][i];
            if (schedule[element].Status === current) {
                console.log(schedule[element]);
            }
        }
    }
}
flightSchedule([
    ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
    ['Cancelled']
]);
console.log(`---DIVIDER---`);
flightSchedule([
    ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'],
    ['Ready to fly']
]);