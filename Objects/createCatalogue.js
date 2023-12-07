function createCatalogue(data){
    let catalogue = {};
    for (let i = 0; i < data.length; i++){
        let tokens = data[i].split(" : ");
        let item = tokens[0];
        let value = Number(tokens[1]);
        catalogue[item] = value;
    }
    let itemArr = Object.keys(catalogue);
    // itemArr.sort((a,b) => a.toString().charCodeAt(0) - b.toString().charCodeAt(0));
    itemArr.sort((a,b) => a.toString().localeCompare(b.toString()))
    let letter = "";
    for (let i = 0; i < itemArr.length; i++){
        if (letter !== itemArr[i][0]){
            console.log(itemArr[i][0]);
            letter = itemArr[i][0];
        }
        for (elem in catalogue){
            if (itemArr[i] === elem){
                console.log(`  ${elem}: ${catalogue[elem]}`);
            }
        }
    }
}
createCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10','Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);
console.log("---DIVIDER---");
createCatalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ])