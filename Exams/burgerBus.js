function burgerBus(input){
    let cityCount = Number(input.shift());
    let currentCityCount = 0;
    let totalProfit = 0;
    for (let i = 0; i < input.length; i += 3 ){
        currentCityCount++;
        if (currentCityCount > cityCount){
            break
        }
        let currentCityProfit = 0;
        let cityName = input[i];
        let income = Number(input[i+1]);
        let expences = Number(input[i+2]);
        let isRaining = false;

        if (currentCityCount % 5 === 0){
            isRaining = true;
            income = income * 0.9;
        }
        if (currentCityCount % 3 == 0 && !isRaining){
            expences = expences * 1.5;
        }
        currentCityProfit = income - expences;
        totalProfit += currentCityProfit;

        console.log(`In ${cityName} Burger Bus earned ${currentCityProfit.toFixed(2)} leva.`);
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
// burgerBus(["3",

// "Sofia",

// "895.67",

// "213.50",

// "Plovdiv",

// "2563.20",

// "890.26",

// "Burgas",

// "2360.55",

// "600.00"]);
// console.log("---DIVIDER---");
// burgerBus(["5",

// "Lille",

// "2226.00",

// "1200.60",

// "Rennes",

// "6320.60",

// "5460.20",

// "Reims",

// "600.20",

// "452.32",

// "Bordeaux",

// "6925.30",

// "2650.40",

// "Montpellier",

// "680.50",

// "290.20"]);
burgerBus(["16",
"1Sofia", "895.67", "213.50",
"2Plovdiv", "2563.20","890.26",
"3Burgas", "2360.55", "600.00",
"4Sofia", "895.67", "213.50",
"5Plovdiv", "2563.20","890.26",
"6Burgas", "2360.55", "600.00",
"7Sofia", "895.67", "213.50",
"8Plovdiv", "2563.20","890.26",
"9Burgas", "2360.55", "600.00",
"10Sofia", "895.67", "213.50",
"11Plovdiv", "2563.20","890.26",
"12Burgas", "2360.55", "600.00",
"13Sofia", "895.67", "213.50",
"14Plovdiv", "2563.20","890.26",
"15BurgasSSSS", "2360.55", "600.00",
"16Sofia", "895.67", "213.50",
"17Plovdiv", "2563.20","890.26",
"18Burgas", "2360.55", "600.00"]);