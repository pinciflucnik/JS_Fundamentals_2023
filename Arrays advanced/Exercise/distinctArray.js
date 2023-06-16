function distinctArray(arr){
    for (let current = 0; current < arr.length; current++){
        for (let toBeChecked = 1; toBeChecked < arr.length; toBeChecked++){
            if (current < toBeChecked){
                if(arr[current] === arr[toBeChecked]){
                    arr.splice(toBeChecked,1);
                    toBeChecked--;
                }
            }
        }
    }
    return arr.join(" ");
}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]))