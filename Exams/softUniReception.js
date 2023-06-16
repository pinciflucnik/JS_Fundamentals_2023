function softUniReception(input) {
    let hourlyRateOne = Number(input[0]);
    let hourlyRateTwo = Number(input[1]);
    let hourlyRateThree = Number(input[2]);
    let quiestions = Number(input[3]);
    let hour = 0;

    while (quiestions > 0){
        hour++;
        if (hour % 4 == 0){
            continue;
        } else {
            quiestions -= (hourlyRateOne + hourlyRateTwo + hourlyRateThree)
        }
    }
    console.log(`Time needed: ${hour}h.`);
}
softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);