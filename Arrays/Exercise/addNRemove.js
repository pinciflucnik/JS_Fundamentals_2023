function addNRemove (commands){
    let element = 1;
    let arr = [];
    for (let i = 0; i < commands.length; i++){
        switch (commands[i]){
            case 'add': arr.push(element);  break;
            case 'remove': arr.pop(); break;
        }
        element ++;
    }
    if (arr[0]){
        console.log(arr.join(" "));
    } else {
        console.log('Empty');
    }
}
addNRemove(['add', 'add', 'remove', 'add', 'add'])