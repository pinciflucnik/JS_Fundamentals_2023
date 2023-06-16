function pointsValidation([x1,y1,x2,y2]){
    let result = 0;
    function pointToPointDistanceValidation(firstX, firstY, secondX, secondY){
        result = Math.sqrt(Math.pow((secondX - firstX),2) + Math.pow((secondY - firstY),2));
        return result;
    }
    pointToPointDistanceValidation(x1,y1,0,0);
    if (Number.isInteger(result)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    pointToPointDistanceValidation(x2,y2,0,0)
    if (Number.isInteger(result)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    pointToPointDistanceValidation(x1,y1,x2,y2);
    if (Number.isInteger(result)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
pointsValidation([3, 0, 0, 4]);
