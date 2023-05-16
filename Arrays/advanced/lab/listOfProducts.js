function listOfProducts(arr){
    let sortAscending = arr.sort();
    for (let m = 0; m < sortAscending.length; m++){
        let newArrCurrent = sortAscending[m]
        console.log(`${m+1}.${newArrCurrent}`);
    }
    
}
listOfProducts(['Watermelon', 'Banana', 'Apples', 'Acetone', 'Aqua'])