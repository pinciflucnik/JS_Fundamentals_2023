function distinctArray(arr) {
    let arrToPrint = "";
    for (let i = 0; i < arr.length; i++) {
      for (let m = 0; m < arr.length; m++) {
        if (Number.isInteger(arr[i])) {
          if (arr[i] == arr[m] && i != m) {
            arr.splice(m, 1)
          }
        }
        else {
           arr.splice(i,1)
        }
      }
    }
    for (let n = 0; n < arr.length; n++) {
      arrToPrint += arr[n] + " ";
    }
    console.log(arrToPrint);
  }