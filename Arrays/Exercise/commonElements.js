function commonElements(arr1, arr2){
    for (let i = 0; i < arr1.length; i++){
        for (let m = 0; m < arr2.length; m++){
            if (arr1[i]===arr2[m]){
                console.log(arr1[i]);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])