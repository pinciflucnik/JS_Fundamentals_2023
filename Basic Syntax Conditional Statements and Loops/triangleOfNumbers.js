function triangleOfNumbers(n){
    let print = "";
    for (let i = 1; i <= n; i++){
        for (let m = 1; m <= i; m++){
            print = print + i + " ";
        }
        console.log(print);
        print = "";
    }
}
triangleOfNumbers(5)