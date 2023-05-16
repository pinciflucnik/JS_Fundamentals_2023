function reverseArray(n, array){
    let newArray = ""
    for (let i = n - 1; i >= 0; i--){
        newArray =newArray + array[i] +" ";
    }
    console.log(newArray);
}
reverseArray(3, [10, 20, 30, 40, 50]);