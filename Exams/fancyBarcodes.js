function fancyBarcodes(input) {
    let validBarcodePattern = /([@][#]+)[A-Z][A-Za-z0-9]{4,}[A-Z]([@][#]+)/;
    let digitPattern = /\d/g;
    let count = Number(input.shift());
    if (count > input.length){
        count = input.length
    }
    for (let i = 0; i < count; i++) {
        let group = '';
        let curLine = input[i];
        let match = curLine.match(validBarcodePattern);
        if (match && match[0].length === curLine.length) {
            let digitMatch = match[0].match(digitPattern);
            if (digitMatch) {
                for (const digit of digitMatch) {
                    group += digit;
                }
            } else {
                group = '00';
            }
            console.log(`Product group: ${group}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}
fancyBarcodes(["3",
    "@#Fre2shFisH@#",
    "@###Brea0D@###@#BroooT@#",
    "@##Che4s6E@##"
]);
// console.log('---DIVIDER---');
// fancyBarcodes(["6",
//     "@###Val1d1teM@###",
//     "@#ValidIteM@#",
//     "##InvaliDiteM##",
//     "@InvalidIteM@",
//     "@#Invalid_IteM@#",
//     "@#ValiditeM@#"
// ]);