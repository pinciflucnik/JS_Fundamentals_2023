function activationKeys(input){
    let key = input.shift();
    let index = 0;
    let line = input[index];
    index++;
    while (line !== 'Generate'){
        let tokens = line.split('>>>');
        let command = tokens[0];
        switch (command){
            case 'Contains':
                let subStr = tokens[1];
                if (key.includes(subStr)){
                    console.log(`${key} contains ${subStr}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                let casing = tokens[1];
                let startIndex = Number(tokens[2]);
                let endIndex = Number(tokens[3]);
                key = key.split('');
                switch (casing){
                    case 'Upper':
                        for (let i = startIndex; i < endIndex; i++){
                            key[i] = key[i].toUpperCase();
                        }
                        break;
                    case 'Lower':
                        for (let i = startIndex; i < endIndex; i++){
                            key[i] = key[i].toLowerCase();
                        }
                        break;
                }
                key = key.join('');
                console.log(key);
                break;
            case 'Slice':
                let start = Number(tokens[1]);
                let end = Number(tokens[2]);
                let buffer = key.slice(0,start);
                key = buffer + key.slice(end);
                console.log(key);
                break;
        }
        line = input[index];
        index++;
    }
    console.log(`Your activation key is: ${key}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);
console.log('---DIVIDER---');
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);