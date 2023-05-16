function houseParty(arr) {
    let list = [];
    let nameRegex = /^[A-Za-z]+/
    let isNotGoingCheck = /not/
    for (let i = 0; i < arr.length; i++) {
      let isOnTheList = false;
      let command = arr[i];
      let name  = command.match(nameRegex)
      name = name[0]; 
      if (!isNotGoingCheck.test(command)){
        if (list.length == 0){
          list.push(name);
          continue;
        }
        for (let m = 0; m < list.length; m++){
          if (list[m] == name){
            console.log(`${name} is already in the list!`);
            isOnTheList = true;
            break;
          }
          if (!isOnTheList){
            list.push(name);
            break;
          }
        }
      }
      else {
        for (let n = 0; n < list.length; n++){
          if (list[n] == name){
            list.splice(n,1);
            isOnTheList = true;
            break;
          }
        }
        if (!isOnTheList){
          console.log(`${name} is not in the list!`);
          continue;
        }
   
      }
    }
    for (let o = 0; o < list.length; o++){
      console.log(list[o]);
    }
  }