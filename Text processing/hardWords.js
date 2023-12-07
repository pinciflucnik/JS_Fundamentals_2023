function hardWords([text, wordsArr]){
    let textArr = text.split(' ');
    let myRegex = /_/g;
    for (let i = 0; i < textArr.length; i++){
        let currnet = textArr[i];
        let isBlank = myRegex.test(textArr[i]);
        if (isBlank){
            for (let word of wordsArr){
                let blank = textArr[i].match(myRegex).join('');
                if (word.length === blank.length){
                    textArr[i] = textArr[i].replace(blank, word);
                    break;
                }
            }
        }
    }
    console.log(textArr.join(' '));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])