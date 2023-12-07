function passwordGenerator(data){
    let firstStr = data[0];
    let secondStr = data[1];
    let word = data[2];
    let password = firstStr + secondStr;
    let index = 0;
    let passwordArr = password.split('');
    for (let char of passwordArr){
        switch (char){
            case 'a':
            case 'e':
            case 'o':
            case 'u':
            case 'i':
                if (index >= word.length){
                    index = 0;
                }
                passwordArr[passwordArr.indexOf(char)] = word[index].toUpperCase();
                index ++;
                break;
        }
    }
    password = passwordArr.reverse().join('');
    console.log(`Your generated password is ${password}`);
}
passwordGenerator([ 'ilovepizza', 'ihatevegetables', 'orange' ]);
console.log('Your generated password is sElbGtNgAvRtOhEGzzNpAvRlO');
console.log('---DIVIDER---');
passwordGenerator([ 'easymoneyeazylife', 'atleasttencharacters', 'absolute' ]);
console.log('Your generated password is srTtcUrLhcnOttsSBltAEfTlyzULyOnSmysBA');
console.log('---DIVIDER---');
passwordGenerator([ 'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed' ]);
console.log('Your generated password is SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD');