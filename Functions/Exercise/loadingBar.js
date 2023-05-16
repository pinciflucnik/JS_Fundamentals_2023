function loadingBar(num){
    let count = num / 10;
    let percent = "";
    let dotsCount = 10 - count;
    let dots = "";
    for (let i = 1; i <= count; i++){
        percent += "%";
    }
    for (let m = 1; m <= dotsCount; m++){
        dots += "."
    }
    if (count < 10){
        console.log(`${num}% [${percent}${dots}]`);
        console.log(`Still loading...`);
    }
    else {
        console.log(`${num}% Complete!`);
        console.log(`[${percent}${dots}]`);
    }

}
loadingBar(0)