function carWash(input){
    let cleaned = 0;
    let inputLength = input.length;
    for (let i= 0; i < inputLength; i++ ){
        let current = input[i];
        switch (current){
            case "soap": cleaned += 10;
                break;
            case "water": cleaned = cleaned + 0.2*cleaned;
                break;
            case "vacuum cleaner": cleaned += 0.25*cleaned;
                break;
            case "mud": cleaned -= 0.1*cleaned;
                break;
        }
    }
    console.log(`The car is ${cleaned.toFixed(2)}% clean.`);

}
carWash(["soap", "water", "mud", "mud", "water", "mud",
"vacuum cleaner"])