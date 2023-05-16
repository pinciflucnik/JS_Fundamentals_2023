function sorting(arr){
    arr.sort(function(a, b){return a-b});
    let newArr = [];
    let m = arr.length -1;
    let toPrint = "";
    for (let i = 0; i < arr.length/2; i++){
      newArr.push(arr[m]);
      newArr.push(arr[i]);
      m--
    }
    if (arr.length % 2 != 0){
      newArr.length = newArr.length -1;
    }
    for (let n = 0; n < newArr.length; n++){
      toPrint += newArr[n]+" ";
    }
    console.log(toPrint);
  } 