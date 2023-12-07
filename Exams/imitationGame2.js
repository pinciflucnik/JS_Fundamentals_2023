function imitationGame(input){
    let message = input.shift();
    for (const element of input) {
        if (element === 'Decode'){
            break;
        }
        let tokens = element.split('|');
        let command = tokens[0];
        switch (command){
            case 'Move':
                let n = Number(tokens[1]);
                message = message.slice(n) + message.slice(0, n);
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let value = tokens[2];
                message = message.slice(0, index) + value + message.slice(index);
                break;
            case 'ChangeAll':
                let subStr = tokens[1];
                let replacement = tokens[2];
                while (message.includes(subStr)){
                   message = message.replace(subStr, replacement);
                }
                break;
        }
    }
    console.log(`The decrypted message is: ${message}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]);
  console.log('---DIVIDER---');
  imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]);