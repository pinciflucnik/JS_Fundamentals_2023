function adAstra(input) {
    let pattern = /([\#|\|])(?<name>[A-Za-z ]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]{0,5})\1/g;
    let totalCalories = 0;
    let food = [];
    let match = pattern.exec(input[0]);
    while (match) {
        let foodName = match.groups.name;
        let date = match.groups.date;
        let calories = Number(match.groups.calories);
        totalCalories += calories;
        food.push([foodName, date, calories]);
        match = pattern.exec(input[0]);
    }
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    if (food.length > 0) {
        for (const product of food) {
            console.log(`Item: ${product[0]}, Best before: ${product[1]}, Nutrition: ${product[2]}`);
        }
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
console.log('---DIVIDER---');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log(('---DIVIDER---'));
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);