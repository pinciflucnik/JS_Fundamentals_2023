function sorting(originalArr) {
    let sortedArr = [];
    while (originalArr.length > 0){
        let maxNum = Math.max(...originalArr);
        let minNum = Math.min(...originalArr);
        let maxNumIndex = originalArr.indexOf(maxNum);
        let minNumIndex = originalArr.indexOf(minNum);
        if (maxNumIndex !== minNumIndex){
            sortedArr.push(maxNum);
            sortedArr.push(minNum);
        } else {
            sortedArr.push(maxNum);
        }
        originalArr.splice(maxNumIndex,1);
        minNumIndex = originalArr.indexOf(minNum);
        originalArr.splice(minNumIndex,1);

    }
    console.log(sortedArr.join(" "));
}
sorting([1])