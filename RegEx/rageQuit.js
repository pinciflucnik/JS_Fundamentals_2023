function rageQuit(data){
    let pattern = /\D+[0-9]+/g;
    let type = typeof data;
    if (type === 'object'){
        data = data[0]
    }
    let dataArr = data.match(pattern);
    let symbolPattern = /\D+/g;
    let digitPattern = /\d+/g;
    let uniqueSymbols = [];
    let printLine = '';
    for (let symbol of dataArr) {
        let symbolLine = symbol.match(symbolPattern)[0];
        let timesToRepeat = Number(symbol.match(digitPattern)[0]);
        let buffer = '';
        for (let char of symbolLine) {
            buffer += char.toUpperCase();
        }
        buffer = buffer.repeat(timesToRepeat)
        printLine += buffer;
    }
    for (const char of printLine) {
           if (!uniqueSymbols.includes(char.toUpperCase())){
            uniqueSymbols.push(char.toUpperCase());
           }
    }
    console.log(`Unique symbols used: ${uniqueSymbols.length}`);
    console.log(printLine);
}
rageQuit(['e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15']);
console.log('---DIVIDER---');
// rageQuit('aSd2&5s@1');