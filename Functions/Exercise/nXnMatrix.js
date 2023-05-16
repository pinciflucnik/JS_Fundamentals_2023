function nXn(num){
    for (let i = 1; i <= num; i++ ){
        let toPrint = "";
        for (let m = 1; m <= num; m++){
            toPrint += num + " ";
        }
        console.log(toPrint);
    }
}
nXn(5)