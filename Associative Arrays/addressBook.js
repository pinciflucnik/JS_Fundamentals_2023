function addressBook(data){
    let addressBookAssociative = {};
    for (element of data){
        let tokens = element.split(":");
        let name = tokens[0];
        let adress = tokens[1];
            addressBookAssociative[name] = adress;
        
    }
    let keys = Object.keys(addressBookAssociative);
    keys.sort((a,b) => a.localeCompare(b))
    for (let i = 0; i < keys.length; i++){
        for (el in addressBookAssociative){
            if (keys[i] === el){
                console.log(`${el} -> ${addressBookAssociative[el]}`);
            }
        }
    }

}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);