function passwordValidator(pass){
    let isValid = false
    if (pass.length <= 10 && pass.length >= 6){
        isValid = true;
    }
    else {
        isValid = false;
        console.log(`Password must be between 6 and 10 characters`);
    }
    let regex = /^[a-zA-Z0-9]+$/sg;
    let valid = regex.test(pass)
    if (valid){
        isValid = true;
    }
    else{
        isValid = false;
        console.log(`Password must consist only of letters and digits`);
    }
    regex = /(.*\d){2}/g;
    valid = regex.test(pass);
    if (valid){
        if (isValid){
        console.log(`Password is valid`);
        }
    }
    else {
        console.log(`Password must have at least 2 digits`);
    }
}
passwordValidator("MyP!3")