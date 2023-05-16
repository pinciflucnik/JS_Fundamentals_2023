function palindromeIntegers(arrOfNum){
    for (let i = 0; i < arrOfNum.length; i++){
        let isPalidome = false;
        let stringNum = String(arrOfNum[i]);
        let n = stringNum.length - 1;
        for (let m = 0; m < stringNum.length; m++){
            if (stringNum[m] == stringNum[n]){
                isPalidome = true;
            }
            else {
                isPalidome = false;
            }
            n--;
        }
        console.log(isPalidome);
    }
}
palindromeIntegers([323,222,425,120])
