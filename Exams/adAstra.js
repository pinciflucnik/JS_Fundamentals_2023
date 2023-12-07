function adAstra(input) {
    let pattern = /(?<symbol>[#|\|])(?<name>[A-Za-z\s]+)\k<symbol>(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\k<symbol>(?<calories>[\d]{1,5})\k<symbol>/g;
    let symbolPattern = /[#|\|]/g;
    let totalCalories = 0;
    let food = [];
    let data = input[0].match(pattern);
    if (data !== null) {
        for (product of data) {
            let productInfo = product.match(pattern);
            let tokens = productInfo[0].split(symbolPattern);
            tokens.pop();
            tokens.shift();
            let name = tokens[0];
            let expirationDate = tokens[1];
            let calories = Number(tokens[2]);
            totalCalories += calories;
            food.push([name, expirationDate, calories]);
        };
    };
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    for (const el of food) {
        console.log(`Item: ${el[0]}, Best before: ${el[1]}, Nutrition: ${el[2]}`);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
console.log('---DIVIDER---');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('---DIVIDER---');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);