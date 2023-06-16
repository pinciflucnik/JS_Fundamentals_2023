function guineaPig(data){
    data = data.map(x => Number(x));

    let foodQuantity = data[0] * 1000; //in grams
    let hay = data[1] * 1000; // in grams
    let cover = data[2] * 1000; //in grams
    let weight = data[3] * 1000; //in grams

    for (let day = 1; day <= 30; day++){
        foodQuantity -= 300;
        if (day % 2 == 0){
            hay = hay - foodQuantity * 0.05;
        }
        if (day % 3 == 0){
            cover = cover - weight / 3;
        }
        if (foodQuantity <= 0 || hay <= 0 || cover <= 0){
            return console.log(`Merry must go to the pet store!`);
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantity/1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}
guineaPig(["9",
"5",
"5.2",
"1"])