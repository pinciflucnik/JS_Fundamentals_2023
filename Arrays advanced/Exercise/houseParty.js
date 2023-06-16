function houseParty(input) {
    let inputLength = input.length;
    let guestList = [];
    for (let index = 0; index < inputLength; index++ ){
        let commandArr = input[index].split(" ");
        let name = commandArr[0];
        let command = commandArr[2];
        switch (command){
            case "going!":
                if (guestList.includes(name)){
                    console.log(`${name} is already in the list!`);
                } else {
                    guestList.push(name);
                }
                break;
            case "not":
                if (!guestList.includes(name)){
                    console.log(`${name} is not in the list!`);
                } else {
                    for (let guest = 0; guest < guestList.length; guest++){
                        if (guestList[guest] === name){
                            guestList.splice(guest,1);
                        }
                    }
                }
                break;
        }
    }
    function printGuestList(arr){
        for (let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
    printGuestList(guestList);
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])