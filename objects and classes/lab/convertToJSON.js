function convertToJSON(name, surname, hair){
    let object = {
        name: name,
        lastName: surname,
        hairColor: hair
    }
    let converted = JSON.stringify(object);
    console.log(converted);
}
convertToJSON('George', 'Jones', 'Brown')