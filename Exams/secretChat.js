function secretChat(input) {
    let message = input.shift();
    let messageArr = message.split("");
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Reveal"){
        let tokens = command.split(":|:");
        let action = tokens[0];

        switch (action){
            case "InsertSpace":
                let insertIndex = Number(tokens[1]);
                messageArr.splice(insertIndex,0," ");
                message = messageArr.join("");
                console.log(message);

                break;
            case "Reverse":
                let substring = tokens[1];
                if (message.includes(substring)){
                    let indexOfSubstr = message.indexOf(substring);
                    let substringLength = substring.length;
                    let substrArr = messageArr.splice(indexOfSubstr,substringLength);
                    for (let i =0; i<substrArr.length; i++){

                        messageArr.splice(indexOfSubstr,0,substrArr[i]);
                    }
                    message = messageArr.join("");
                    console.log(message);
                } else {
                    console.log(`error`);
                }

                break;
            case "ChangeAll":
                let changeAllSubstring = tokens[1];
                let replacement = tokens[2];
                let replacementArr = replacement.split("").reverse();
                while (message.includes(changeAllSubstring)){
                    indexOfSubstr = message.indexOf(changeAllSubstring);
                    changeAllSubstringLength = changeAllSubstring.length;
                    messageArr.splice(indexOfSubstr,changeAllSubstringLength);
                    for (let i = 0; i < replacementArr.length; i++){
                        messageArr.splice(indexOfSubstr,0,replacementArr[i])
                    }  
                    message = messageArr.join("");                  
                }
                console.log(message);

                break;
        }

        command = input[index];
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
  console.log("---DIVIDER---");
  secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])