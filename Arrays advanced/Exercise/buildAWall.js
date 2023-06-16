function buildAWall(wallArr){
let finishedHeight = 30;
let concretePricePerCubicYard = 1900;
let concreteForOneFeet = 195;
let usedConcrete = 0;
let totalPrice = 0;
let sumOFSectionsHeight = wallArr.length * 30;
let concreteArr = [];
function sumArr(arr){
    sum = 0;
    for (let i = 0; i < arr.length; i ++){
        sum += Number(arr[i]);
    }
    return sum;
}
function getCurrentHeightSum (arr){
    arrLength = arr.length;
    let currentSum = 0;
    for (let i = 0; i < arrLength; i++){
        currentSum = currentSum + Number(arr[i]);
    }
    return currentSum;
}
let totalSectionHeightReached = getCurrentHeightSum(wallArr);
while (totalSectionHeightReached < sumOFSectionsHeight){
    for (let i = 0; i < wallArr.length; i++){
        let currentSection = Number(wallArr[i]);
        if (currentSection < 30){
            wallArr[i] = currentSection + 1;
            usedConcrete += 195;
        }
    }
    concreteArr.push(usedConcrete);
    usedConcrete = 0;
    totalSectionHeightReached = getCurrentHeightSum(wallArr);
}
let totalUsedConcrete = sumArr(concreteArr);
totalPrice = totalUsedConcrete * concretePricePerCubicYard;
console.log(concreteArr.join(", "));
console.log(`${totalPrice} pesos`);
}
buildAWall([21, 25, 28])