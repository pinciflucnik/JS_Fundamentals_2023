function storage(data){
    let inventory = {};
    for (el of data){
        let tokens = el.split(" ");
        let item = tokens[0];
        let count = Number(tokens[1]);
        if (inventory.hasOwnProperty(item)){
            inventory[item] += count;
        }else {

            inventory[item] = count
        }
    }

    for (line in inventory){
        console.log(`${line} -> ${inventory[line]}`);
    }

}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40'])