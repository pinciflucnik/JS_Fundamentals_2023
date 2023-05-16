function lastKNumbersSequence(n,k){
    let printLine = [];
    let element = 1;
    for (let i = 1; i <= n; i++){
        printLine.push(element);
        element = 0;
        for (let m = printLine.length - k; m <= printLine.length-1; m++){
            if (m >= 0 && m < printLine.length){
                element += printLine[m]
            }
        }
    }
    let toPrint = "";
    for (let c = 0; c < printLine.length; c++){
        toPrint += printLine[c] + " ";
    }
    console.log(toPrint);
}
lastKNumbersSequence(8,2)