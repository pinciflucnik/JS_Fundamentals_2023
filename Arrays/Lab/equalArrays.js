function equalArrays(arr1, arr2) {
    let sum = 0;
    let counter = 0
        for (let i = 0; i < arr1.length; i++) {
            let current1 = Number(arr1[i]);
            let current2 = Number(arr2[i]);
            if (current1 == current2){
                sum += current1;
                counter ++;
            }
            else {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                break;
            }
        }
        if (counter == arr1.length){
            console.log(`Arrays are identical. Sum: ${sum}`);
        }
}
equalArrays(['10','20','30'], ['10','20','31'])