function passwordReset(input){
    let password = input.shift();
    let index = 0;
    let line = input[index];
    index++;
    while(line !== 'Done'){
        let tokens = line.split(' ');
        let command = tokens[0];
        switch (command){
            case 'TakeOdd':
                let buffer = '';
                for (let i = 0; i < password.length; i++){
                    if (i % 2 !== 0){
                        let currentChar = password[i];
                        buffer += currentChar;
                    }
                }
                password = buffer;
                console.log(password);
                break;
            case 'Cut':
                let startIndex = Number(tokens[1]);
                let length = Number(tokens[2]);
                password = password.split('');
                password.splice(startIndex, length);
                password = password.join('');
                console.log(password);
                break;
            case 'Substitute':
                let subStr = tokens[1];
                let replacement = tokens[2];
                if (password.includes(subStr)){
                    while(password.includes(subStr)){
                        password = password.replace(subStr, replacement);
                    }
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }

        line = input[index];
        index++;
    }
    console.log(`Your password is: ${password}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);
console.log('---DIVIDER---');
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);