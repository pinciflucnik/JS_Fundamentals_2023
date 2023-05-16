function lowerOrUpper(char){
    let regex = /[a-z]/;
    let result = regex.test(char);
    if (result){
        console.log('lower-case');
    }
    else {
        console.log('upper-case');
    }
}
lowerOrUpper('Z')