function shoppingList(data){
    let index = 0;
    let shoppingList = data[index].split("!");
    index++
    let fullCommand = data[index];
    index ++;
     while (fullCommand != "Go Shopping!"){
        fullCommand = fullCommand.split(" ");
        let command = fullCommand[0];
        let item = fullCommand[1];
        let isInlist = shoppingList.includes(item);
        let itemIndex = shoppingList.indexOf(item);
        switch (command){
            case "Urgent":
                if (!isInlist){
                    shoppingList.unshift(item);
                }
                break;
            case "Unnecessary":
                if (isInlist){
                    shoppingList.splice(itemIndex,1);
                }
                break;
            case "Correct":
                if (isInlist){
                    let newItem = fullCommand[2];
                    shoppingList.splice(itemIndex,1,newItem);
                }
                break;
            case "Rearrange":
                if (isInlist){
                    shoppingList.splice(itemIndex,1);
                    shoppingList.push(item);
                }
                break;
        }
        fullCommand = data[index];
        index++;
     }
     return console.log(shoppingList.join(", "));
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])