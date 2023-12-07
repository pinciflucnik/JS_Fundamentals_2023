function phoneShop(input) {
    let inventory = input.shift().split(", ");
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End"){
        let tokens = command.split(" - ");
        let action = tokens[0];
        let item = tokens[1];
        let isInInventory = inventory.includes(item);
        let itemIndex = inventory.indexOf(item);

        switch (action){
            case "Add":
                if (!isInInventory){
                    inventory.push(item);
                }
                break;
            case "Remove":
                if (isInInventory){
                    inventory.splice(itemIndex,1);
                }
                break;
            case "Bonus phone":
                let itemArr = item.split(":");
                let oldItem = itemArr[0];
                let newItem = itemArr[1];
                let indexOfOldItem = inventory.indexOf(oldItem);
                if (indexOfOldItem > -1){
                    inventory.splice(indexOfOldItem + 1, 0, newItem);
                }

                break;
            case "Last":
                if (isInInventory){
                    let buffer = inventory.splice(itemIndex,1);
                    inventory.push(buffer);
                }
                break;
        }

        command = input[index];
        index++;
    }
    console.log(inventory.join(", "));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE",

"Add - Iphone10",

"Remove - IphoneSE",

"End"]);
console.log("---DIVIDER---");
phoneShop(["HuaweiP20, XiaomiNote",

"Remove - Samsung",

"Bonus phone - XiaomiNote:Iphone5",

"End"]);
console.log("---DIVIDER---");
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",

"Last - SamsungA50",

"Add - MotorolaG5",

"End"]);