function theImitationGame(input){
    let message = input.shift();
    let index = 0;
    let command = input[index];
    index ++;
    while (command !== 'Decode'){
        let tokens = command.split('|');
        let action = tokens[0];
        switch (action){
          case 'Move':
            let count = Number(tokens[1]);
            message = message.split('');
            let buffer = message.splice(0, count);
            message = message.concat(buffer).join('');
            break;
          case 'Insert':
            let insertIndex = Number(tokens[1]);
            let char = tokens[2];
            message = message.split('');
            message.splice(insertIndex, 0, char);
            message = message.join('');
            break;
          case 'ChangeAll':
            let searchedChar = tokens[1];
            let replaceChar = tokens[2];
            while (message.includes(searchedChar)){
              message = message.replace(searchedChar, replaceChar);
            }
            break;
        }

        command = input[index];
        index++;
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]);
  console.log('---DIVIDER---');
  theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]);