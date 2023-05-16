function reverse(arr){
    let printedLine = "";
    for (let i = 0; i < arr.length; i+=2){
        arr.unshift(arr[i]);
    }
    arr.splice(Math.ceil((arr.length -1)/2),(arr.length/2))
    for (let m = 0; m < arr.length; m++){
        printedLine = printedLine + arr[m]+ " ";
    }
    console.log(printedLine);
}
reverse(['a', 'b', 'c', 'd', 'e'])