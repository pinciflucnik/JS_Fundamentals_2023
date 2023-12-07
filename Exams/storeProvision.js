function storeProvision(inStock,ordered) {
    let inStockArr = [];
    let orderedArr = [];
    class Item {
        constructor (name, quantity){
            this.name = name;
            this.quantity = quantity;
        }
    }
    let inStockNames = [];
    for (i = 0; i < inStock.length; i += 2){
        let curItemName = inStock[i];
        let curQuantity = Number(inStock[i+1]);
        
        let curItem = new Item(curItemName, curQuantity);
        inStockArr.push(curItem);
        inStockNames.push(curItem.name)
    }
    for (i = 0; i < ordered.length; i += 2){
        let curItemName = ordered[i];
        let curQuantity = Number(ordered[i+1]);
        
        let curItem = new Item(curItemName, curQuantity);
        orderedArr.push(curItem);
    }

    for (let i = 0; i < orderedArr.length; i++){
        let indexInStock = inStockNames.indexOf(orderedArr[i].name);
        if (indexInStock > -1){
            inStockArr[indexInStock].quantity += orderedArr[i].quantity;
            orderedArr.splice(i,1);
            i--;
        }
    }
    for (let i = 0; i < inStockArr.length; i++){
        console.log(`${inStockArr[i].name} -> ${inStockArr[i].quantity}`);
    }
    for (el of orderedArr){
        console.log(`${el.name} -> ${el.quantity}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]);
console.log("---DIVIDER---");
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14',
    'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7',
    'Tomatoes', '7', 'Bananas', '30'
    ]);