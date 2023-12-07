function phoneBookArray(arr){
    let phonebook = {};
    for (let element of arr){
        let data = element.split(" ");
        let name = data[0];
        let num = data[1];
        phonebook[name] = num;
    }
    for (userName in phonebook){
        console.log(`${userName} -> ${phonebook[userName]}`);
    }
    
}
phoneBookArray(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])