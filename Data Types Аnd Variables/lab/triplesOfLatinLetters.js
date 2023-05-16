function triples(n){
    for (let i = 0; i < n; i++){
        let letter1 = String.fromCharCode(97 + i);
        for (let m = 0; m < n; m++){
            let letter2 = String.fromCharCode(97 + m);
            // printString += letter;
            for (let j = 0; j < n; j++){
                let printString = "";
                let letter3 = String.fromCharCode(97 + j);
                printString = letter1 + letter2 + letter3;
                console.log(printString);
            }
        }

    }
}
triples(3)