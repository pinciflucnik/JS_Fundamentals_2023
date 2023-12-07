function modernTimesOfHashTag(text){
    let result = text.split(" ");
    for (const word of result) {
        if (word.startsWith('#') && word.length > 1){
            let isOnlyLetters = true;
            for (const char of word) {
                if (char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58){
                    isOnlyLetters = false;
                }
            }
            if (isOnlyLetters){
                console.log(word.slice(1));
            }
        }
    }
}
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')