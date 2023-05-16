function orders(drink, count){
    switch (drink){
        case "coffee": console.log((count*1.5).toFixed(2));
            break;
        case "coke": console.log((count*1.40).toFixed(2));
            break;
        case "water": console.log((count*1.00).toFixed(2));
            break;
        case "snacks": console.log((count*2.00).toFixed(2));
            break;
    }
}
orders("coffee", 2)