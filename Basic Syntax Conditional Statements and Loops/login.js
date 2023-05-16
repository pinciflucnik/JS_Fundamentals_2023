function login(input){
    let user = input[0]
    let password = "";
    let counter = 0;
    for (let i = user.length -1; i >= 0; i--){
        let symbol = user[i];
        password = password + symbol;
    }
    for (let m = 1; m < input.length; m++){
        counter ++;
        let checkPass = input[m];
        if (password === checkPass){
            console.log(`User ${user} logged in.`);
        }
        else {
            if (counter >= 4){
                console.log(`User ${user} blocked!`);
                break;
            }
            else{
            console.log(`Incorrect password. Try again.`);
            }
        }
    }


}
login(['sunny','rainy','cloudy','sunny','ynnus'])