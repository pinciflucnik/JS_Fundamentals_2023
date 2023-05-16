function sortAnArrayBy2Criteria(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
       let current = arr[i].length;
       newArr.push(current);
    }
    newArr.sort((a,b) => a-b);
    let last = 0;
    for (let m = 0; m < arr.length; m++){
        for (let n = 0; n <= arr.length; n++){
            if (newArr[m] == arr[n].length && newArr[m-1] != arr[n]){
                newArr.splice(m,1,arr[n]);
                last = arr[n].length;
                break;
            }
        }
    }
    for (let y = 0; y < newArr.length; y++ ){
        if (y > 0 && newArr[y-1].length == newArr[y].length){
            let symbol = 0;
            let minusOne = newArr[y-1].charAt(symbol);
            let current = newArr[y].charAt(symbol);
            while (minusOne == current){
                symbol ++;
                minusOne = newArr[y-1].charAt(symbol); 
                current = newArr[y].charAt(symbol)               
            }
            if (minusOne > current){
                let minusOneFromArr = newArr[y-1];
                let currentFromArr = newArr[y];
                newArr.splice(y-1,1,currentFromArr);
                newArr.splice(y,1,minusOneFromArr);
            }
        }
    }
    for (let x = 0; x < newArr.length; x++){
        console.log(newArr[x]);
    }
}
sortAnArrayBy2Criteria([`test`,
    `Deny`,
    `omen`,
    `Default`])