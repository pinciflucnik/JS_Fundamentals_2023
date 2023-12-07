function travelTime(travel) {
    let travelDestinations = {};

     for (el of travel){
        let [country, city, price] = el.split(" > ");
        price = Number(price);
        if (!travelDestinations.hasOwnProperty(country)){
            travelDestinations[country] = {};
        }
        if (!travelDestinations[country].hasOwnProperty(city)){
            travelDestinations[country][city] = price;
        }
        if (travelDestinations[country][city] > price){
            travelDestinations[country][city] = price;
        }
     }
     let travelEntries = Object.entries(travelDestinations);
     travelEntries.sort((a,b) => a[0].localeCompare(b[0]));
     let printLine = '';
     for (let country  of travelEntries) {
        printLine += `${country[0]} -> `;
        let countryEntries = Object.entries(travelDestinations[country[0]]);
        countryEntries.sort((a,b) => a[1] - b[1]);
        for (element of countryEntries){
            printLine += `${element[0]} -> ${element[1]} `;
        }
        console.log(printLine);
        printLine = '';
     }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])
console.log(`---DIVIDER---`);
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ])