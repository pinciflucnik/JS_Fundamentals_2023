function theLift(input) {
    let queue = Number(input[0]);
    let liftArr = input[1].split(" ").map(Number);
    
    for (let i = 0; i < liftArr.length; i++){
        if (liftArr[i] < 4){
            let emptySeats = 4 - liftArr[i];
            if (queue > emptySeats){
                liftArr[i] += emptySeats;
                queue -= emptySeats;
            } else {
                liftArr[i] += queue;
                queue -= queue;
                if (i == liftArr.length - 1 && liftArr[i] == 4){
                    console.log(liftArr.join(" "));
                    return;
                }
                break;
            }
        }
    }
    if (queue > 0){
        console.log(`There isn't enough space! ${queue} people in a queue!`);
    } else {
        console.log(`The lift has empty spots!`);
    }
    console.log(liftArr.join(" "));
}
theLift([
    "16",
    "0 0 0 0"
   ]);
console.log("---DIVIDER---");
theLift([
    "20",
    "0 2 0"
   ])