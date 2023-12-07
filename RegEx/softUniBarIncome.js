function softUniBarIncome(data) {
    let nameRegex = /%[A-Z][a-z]+%/g;
    let productRegex = /\<\w+\>/g;
    let countRegex = /\|\d+\|/g;
    let priceRegex = /\d+\.*\d+\$/g;
    let index = 0;
    let totalPrice = 0;
    let command = data[index];
    index++;
    while (command !== 'end of shift') {
        if (command.match(nameRegex) && 
        command.match(productRegex) &&
        command.match(countRegex) && 
        command.match(priceRegex)) {
            let name = (command.match(nameRegex))[0];
            name = name.replace(/\%/g, '');

            let product = (command.match(productRegex))[0];
            product = product.replace(/\</g,'');
            product = product.replace(/\>/g,'');

            let count = (command.match(countRegex))[0];
            count = Number(count.replace(/\|/g,''));

            let price = (command.match(priceRegex))[0];
            price = Number(price.replace('$',''));

            totalPrice = totalPrice + (price * count);
            console.log(`${name}: ${product} - ${(price * count).toFixed(2)}`);
        }
        command = data[index];
        index++;
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);

}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
console.log('---DIVIDER---');
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])