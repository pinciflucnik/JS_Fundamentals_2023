function convertToJSON (firstName, surName, hair){
    let person = {
        name: firstName,
        lastName: surName,
        hairColor: hair
    }

    let personStr = JSON.stringify(person);
    console.log(personStr);
}
convertToJSON('George', 'Jones', 'Brown')