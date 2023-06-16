function arrayManipulator(arr, commandsArr) {
    function addElementToArray(arrToModify, startIndex, arrOfElements){
        let arrOfElementsLength = arrOfElements.length;
        for (let i=0; i < arrOfElementsLength; i++){
            arrToModify.splice(startIndex,0,Number(arrOfElements[i]));
        }
        return arrToModify;
    };
    function containsElement(sarchedElement, arrToSearch){
        let arrToSearchLength = arrToSearch.length;
        for (let i = 0; i < arrToSearchLength; i++){
            let currentElement = Number(arrToSearch[i]);
            if (currentElement === sarchedElement){
                return console.log(i);
            } 
          }
          return console.log("-1");
    };
    function removeElementFromArray(index,arrToModify){
        arrToModify.splice(index,1);
        return arrToModify;
    };
    function sumPairsOfArr(arrToModify){
        let arrLength = arrToModify.length;
        let newArr = [];
        for (let i = 1; i < arrLength; i += 2){
            sum = Number(arrToModify[i]) + Number(arrToModify[i-1])
            newArr.push(sum);
            if (i + 1 == arrLength -1){
                newArr.push(arrToModify[i+1]);
            }
        }
        if (arrToModify.length === 1){
          newArr.push(arrToModify[0]);
        }
        return newArr;
    };
    function printArr(finalArr){
        console.log("[ "+finalArr.join(", ")+" ]");
    };
    function shiftElementsFromArray (numberOfShifts, arrToModify){
        for (let i = 0; i < Math.abs(numberOfShifts); i++){
            let firsElement = arrToModify[0];
            let lastElement = arrToModify[arrToModify.length - 1];
            if (numberOfShifts >= 0){
                arrToModify.push(firsElement);
                arrToModify.shift();
            } else {
                arrToModify.unshift(lastElement);
                arrToModify.pop()
            }
        }
        return arrToModify;
    };
    let commandArrLength = commandsArr.length;
    for (let i = 0; i < commandArrLength; i++){
        let fullCommand = commandsArr[i].split(" ");
        let command = fullCommand[0];
        switch (command){
            case "add": 
            let index = Number(fullCommand[1]);
            let element = [fullCommand[2]];
            // arr.splice(index,0,element);
            arr = addElementToArray(arr,index,element);
                break;
            case "addMany":
                fullCommand.shift();
                let indexToAddMany = fullCommand.shift();
                let manyElements = fullCommand.reverse();
                // for (let m = 0; m < manyElements.length; m++){
                //     let currentElement = Number(manyElements[m]);
                //     arr.splice(indexToAddMany,0,currentElement);
  
                // }
                arr = addElementToArray(arr,indexToAddMany,manyElements);
                break;
            case "contains":
                let elementToCheck = Number(fullCommand[1]);
                containsElement(elementToCheck,arr);
                break;
            case "remove":
                let toDelete = Number(fullCommand[1]);
                arr = removeElementFromArray(toDelete,arr);
  
                break;
            case "shift":
                let shiftCount = Number(fullCommand[1]);
                arr = shiftElementsFromArray(shiftCount,arr);
  
                break;
            case "sumPairs":
                arr = sumPairsOfArr(arr);
  
                break;
            case "print":
                printArr(arr);
                return;
        }
  
    }
  }
arrayManipulator([1, 2,3],
    ['sumPairs','print'])