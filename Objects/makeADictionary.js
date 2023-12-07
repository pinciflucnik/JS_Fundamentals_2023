function makeADictionary(data) {
    function getList(dictionary) {
        let termsList = []
        for (let i = 0; i < dictionary.length; i++) {
            let key = Object.keys(dictionary[i]);
            termsList.push(key[0]);
        }
        return termsList;
    }

    let dictionary = [];

    for (let i = 0; i < data.length; i++) {
        let curTerm = JSON.parse(data[i]);
        let curTermList = getList(dictionary);
        let curTermKey = Object.keys(curTerm);
        curTermKey = curTermKey[0];
        let inListIndex = curTermList.indexOf(curTermKey);

        if (inListIndex > -1) {
            let curVal = Object.values(dictionary[inListIndex]);
            curVal = curVal[0];
            let newVal = Object.values(curTerm);
            newVal = newVal[0];
            dictionary[inListIndex][curTermKey] = curTerm[curTermKey];

        } else {
            dictionary.push(curTerm);
        }

    }
    dictionary = dictionary.sort(function(a,b){
        let first = Object.keys(a);
        let second = Object.keys(b)
        return first[0].localeCompare(second[0]);
    });

    for (word of dictionary) {
        console.log(`Term: ${Object.keys(word)} => Definition: ${Object.values(word)}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made    from the roasted and ground    seeds (coffee beans) of a    tropical shrub."}',
    '{"Bus":"A large motor vehicle    carrying passengers by road,    typically one serving the public    on a fixed route and for a    fare."}',
    '{"Boiler":"A fuel-burning    apparatus or container for    heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    `{"Coffee":"new description"}`])
console.log("---DIVIDER---");
makeADictionary([
    '{"Cup":"A small bowl-shaped    container for drinking from,    typically having a handle"}', '{"Cake":"An item of soft sweet    food made from a mixture of    flour, fat, eggs, sugar, and    other ingredients, baked and    sometimes iced or decorated."}    ',
    '{"Watermelon":"The large fruit    of a plant of the gourd family,    with smooth green skin, red    pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental    sounds (or both) combined in    such a way as to produce beauty    of form, harmony, and expression    of emotion."} ',
    '{"Art":"The expression or    application of human creative    skill and imagination, typically    in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or    emotional power."} '
])