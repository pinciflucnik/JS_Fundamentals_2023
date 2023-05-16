function charactersInRange(unput1, unput2) {
    let char1 = String(unput1);
    let char2 = String(unput2);
    let toPrint = "";
    let first = char1.charCodeAt(0);
    let second = char2.charCodeAt(0);
    if (first < second) {
        for (let i = first + 1; i < char2.charCodeAt(0); i++) {
            let current = String.fromCharCode(i);
            toPrint += current + " ";
        }
    }
    else if (second < first){
        for (let m = second + 1; m < char1.charCodeAt(0); m++) {
            let current = String.fromCharCode(m);
            toPrint += current + " ";
        }

    }
    console.log(toPrint);
}
charactersInRange("C",
    "#")