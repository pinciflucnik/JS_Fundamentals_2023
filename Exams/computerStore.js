function computerStore(input) {
    let index = 0;
    let customerType = input[index];
    index++;
    let partsSum = 0;

    while (Number(customerType)){
        let currentPartPrice = Number(customerType);
        if (currentPartPrice < 0){
            console.log(`Invalid price!`);
            customerType = input[index];
            index++;
            continue;
        } else {
            partsSum += currentPartPrice;
        }


        customerType = input[index];
        index++;
    }
    let taxes = partsSum * 0.2;
    let totalSum = partsSum + taxes;
    if (totalSum == 0){
        console.log(`Invalid order!`);
        return;
    } else if (customerType === "special"){
        totalSum = totalSum * 0.9
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${partsSum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${totalSum.toFixed(2)}$`);
}
// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
//     ]);
//     console.log("---DIVIDER---");
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]);
    console.log("---DIVIDER---");
computerStore([
    'regular'
    ]);