function spiceMustFlow(yield){
    let daysCount = 0
    let spices = 0;
    while (yield >= 100){
        spices = spices + yield - 26;
        yield = yield - 10;
        daysCount ++;
    }
    if (spices >= 26){
        spices -= 26;
    }
    console.log(daysCount);
    console.log(spices);
}
spiceMustFlow(450)