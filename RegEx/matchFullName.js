function matchFullName (text){
    let myRegex = /\b[A-Z]{1}[a-z]+ [A-Z][a-z]+\b/g;
    textArr = text.split(', ');
    let validNames = [];
    while ((current = myRegex.exec(text)) !== null){
        validNames.push(current[0]);
    }
    console.log(validNames.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");
