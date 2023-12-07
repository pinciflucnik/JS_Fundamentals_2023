function passwordValidator(input) {
    let password = input.shift();
    for (const line of input) {
        if (line === 'Complete') {
            break;
        }
        let tokens = line.split(' ');
        let command = tokens[0];
        switch (command) {
            case 'Make':
                let casing = tokens[1];
                let i = Number(tokens[2]);
                let newChar = password[i];
                if (casing === 'Upper') {
                    newChar = newChar.toUpperCase();
                    password = password.slice(0, i) + newChar + password.slice(i + 1);
                } else if (casing === 'Lower') {
                    newChar = newChar.toLowerCase();
                    password = password.slice(0, i) + newChar + password.slice(i + 1);
                }
                console.log(password);
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let char = tokens[2];
                if (index > password.length || index < 0) {
                    break;
                }
                password = password.slice(0, index) + char + password.slice(index);
                console.log(password);
                break;
            case 'Replace':
                let charToReplace = tokens[1];
                let key = Number(tokens[2]);
                let replacementValue = charToReplace.charCodeAt() + key;
                let replacementChar = String.fromCharCode(replacementValue);
                while (password.includes(charToReplace)) {
                    password = password.replace(charToReplace, replacementChar);
                }
                console.log(password);
                break;
            case 'Validation':
                if (password.length < 8) {
                    console.log('Password must be at least 8 characters long!');
                }
                let pattern = /\w+/g;
                let isValid = password.match(pattern);
                if (isValid) {
                    if (isValid[0].length !== password.length) {
                        console.log('Password must consist only of letters, digits and _!');
                    }
                }

                let hasUpperCase = false;
                let hasLowerCase = false;
                let hasDigit = false;
                for (const char of password) {
                    let charCode = char.charCodeAt();
                    if (charCode >= 65 && charCode <= 90) {
                        hasUpperCase = true;
                    }
                    if (charCode >= 97 && charCode <= 122) {
                        hasLowerCase = true;
                    }
                    if (charCode >= 48 && charCode <= 57) {
                        hasDigit = true;
                    }
                }
                if (!hasUpperCase) {
                    console.log('Password must consist at least one uppercase letter!');
                }
                if (!hasLowerCase) {
                    console.log('Password must consist at least one lowercase letter!');
                }
                if (!hasDigit) {
                    console.log('Password must consist at least one digit!');
                }
                break;
        }
    }
}
passwordValidator(['invalidpassword*',

    'Add 2 p',

    'Replace i -50',

    'Replace * 10',

    'Make Upper 2',

    'Validation',

    'Complete'
]);
console.log('---DIVIDER---');
passwordValidator(['123456789',

    'Insert 3 R',

    'Replace 5 15',

    'Validation',

    'Make Lower 3',

    'Complete'
]);