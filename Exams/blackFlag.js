function blackFlag(input) {
    let totalDays = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let target = Number(input[2]);
    let gatheredPlunder = 0;

    for (let day = 1; day <= totalDays; day++){
        gatheredPlunder += dailyPlunder;
        if (day % 3 === 0){
            gatheredPlunder += dailyPlunder * 0.5;
        }
        if (day % 5 === 0){
            gatheredPlunder = gatheredPlunder * 0.7;
        }
    }
    
    if(gatheredPlunder >= target){
        console.log(`Ahoy! ${gatheredPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percent = gatheredPlunder / target * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }

}
blackFlag(["5",
"40",
"100"]);
blackFlag(["10",
"20",
"380"]);