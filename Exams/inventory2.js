function inventory(input) {
    let inventory = input.shift().split(", ");
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Craft!"){
        let tokens = command.split(" - ");
        let action = tokens[0];
        let item = tokens[1];
        let isInList = inventory.includes(item);
        let indexOfItem = inventory.indexOf(item);

        switch (action){
            case "Collect":
                if (!isInList){
                    inventory.push(item);
                }
                break;
            case "Drop":
                if (isInList){
                    inventory.splice(indexOfItem,1);
                }
                break;
            case "Combine Items":
                item = item.split(":");
                let oldItem = item[0];
                let newItem = item[1];
                isInList = inventory.includes(oldItem);

                if (isInList){
                    indexOfItem = inventory.indexOf(oldItem);
                    inventory.splice(indexOfItem+1, 0, newItem);

                }
                break;
            case "Renew":
                if (isInList){
                    inventory.splice(indexOfItem,1);
                    inventory.push(item);

                }
                break;

        }
        command = input[index];
        index++;
    }
    console.log(inventory.join(", "));
}
inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]);
  console.log("---");
  inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])