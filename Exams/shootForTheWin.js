function shootForTheWin(dataArr) {
    let index = 0;
    let targetsArr = dataArr[index].split(" ").map(Number);
    index++;
    let command = dataArr[index];
    index++;

    while (command !== "End") {
        let targetIndex = Number(command);
        let currentTarget = targetsArr[targetIndex];
        if (targetsArr[targetIndex] !== -1 && targetIndex < targetsArr.length) {
            targetsArr[targetIndex] = -1;
            for (let i = 0; i < targetsArr.length; i++) {
                if (i !== targetIndex) {

                    if (targetsArr[i] !== -1 && targetsArr[i] <= currentTarget) {
                        targetsArr[i] += currentTarget;
                    } else if (targetsArr[i] !== -1 && targetsArr[i] > currentTarget){
                        targetsArr[i] -= currentTarget;
                    }
                }
            }
        }
        command = dataArr[index];
        index++;
    }
    let counter = targetsArr.filter(x => x == -1);
    console.log(`Shot targets: ${counter.length} -> ${targetsArr.join(" ")}`);
}
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);