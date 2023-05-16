function arrayRotationVer2 (arr, rotations){
    for (let i = 0; i < rotations; i++){
        arr.push(arr[i]);
    }
    arr.splice(0, rotations);
    console.log(arr.join(` `));
}
arrayRotationVer2([32, 21, 61, 1], 4);