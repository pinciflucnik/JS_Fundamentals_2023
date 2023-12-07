function secretChat(input){
    let message = input.shift();
    let index = 0;
    let line = input[index];
    index++;
    while (line !== 'Reveal'){
        let tokens = line.split(':|:');
        let command = tokens[0];
        switch (command){
            case 'InsertSpace':
                let space = Number(tokens[1]);
                message = message.split('');
                message.splice(space,0,' ');
                message = message.join('');
                break;
            case 'Reverse':
                let subStr = tokens[1];
                if (message.includes(subStr)){

                    let reversedStr = subStr.split('').reverse();
                     message = message.split('');
                     let indexOfSubStr = message.indexOf(subStr[0]);
                     let subStrLength = subStr.length;
                     message.splice(indexOfSubStr,subStrLength);
                     message = message.concat(reversedStr).join('');
                } else {
                    console.log(`error`);
                    line = input[index];
                    index++;
            
                    continue;
                }
                break;
            case 'ChangeAll':
                let subString = tokens[1];
                let replacement = tokens[2];
                while (message.includes(subString)){
                    message = message.replace(subString, replacement);
                }
                break;
        }
        console.log(message);
        line = input[index];
        index++;
    }
    console.log(`You have a new text message: ${message}`);

}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);
  console.log('---DIVIDER---');
  secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);