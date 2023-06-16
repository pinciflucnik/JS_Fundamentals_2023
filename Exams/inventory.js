function inventory(input){
    let index = 0;
    let inventoryArr = input[index].split(", ");
    index ++;
    let fullCommand = input[index];
    index++;
    while (fullCommand !== "Craft!"){
        fullCommand = fullCommand.split(" - ");
        let command = fullCommand[0];
        let item = fullCommand[1];
        let isIncluded = inventoryArr.includes(item);

        switch (command){
            case "Collect":
                if (isIncluded){
                    break;
                } else {
                    inventoryArr.push(item);
                }
                break;
            case "Drop":
                if (isIncluded){
                    let indexOfitem = inventoryArr.indexOf(item);
                    inventoryArr.splice(indexOfitem,1);
                }
                break;
            case "Combine Items":
                let arrToCombine = item.split(":");
                item = arrToCombine[0];
                let newItem = arrToCombine[1];
                isIncluded = inventoryArr.includes(item);
                if (isIncluded){
                    indexOfitem = inventoryArr.indexOf(item);
                    inventoryArr.splice(indexOfitem+1,0,newItem);
                }
                break;
            case "Renew":
                if (isIncluded){
                    indexOfitem = inventoryArr.indexOf(item);
                    inventoryArr.splice(indexOfitem,1);
                    inventoryArr.push(item);
                }
                break;
        }
        fullCommand = input[index];
        index++;
    }

    console.log(inventoryArr.join(", "));
}
inventory([
    'Iron, Sword',
    'Drop - Sword',
    'Combine Items - Sword:Bow',
    'Craft!'
  ])