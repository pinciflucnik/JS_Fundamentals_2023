function sortAnarraybyTwoCriteria (arr){
    function sortBylength (arrToSort){
      return arrToSort.sort((a,b) => a.length - b.length);
    }
    arr = sortBylength(arr);
    let arrLength = arr.length;
    // for (let index = 0; index < arrLength; index++){
    //   let currentElement = arr[index];
    //   if(index > 0){
    //     let previousElement = arr[index-1];
    //     if (currentElement.length === previousElement.length){
    //       for (let char = 0; char < currentElement.length; char ++){
    //         let curElChar = currentElement.charCodeAt(char);
    //         let prevElChar = previousElement.charCodeAt(char);
    //         if (curElChar < prevElChar){
    //           arr.splice(index-1,0,currentElement);
    //           arr.splice(index+1,1);
    //           break;
    //         } else if (curElChar > prevElChar){
    //           break;
    //         }
    //       }
    //     }
    //   }
    // }
    let alphabeticalySorted = [];
    let hasSameLength = false;
    for (let index = 0; index < arrLength; index++){
      if (index > 0){
        let currentElement = arr[index];
        let previousElement = arr[index-1];
        if (currentElement.length === previousElement.length){
          alphabeticalySorted.push(previousElement);
          hasSameLength = true;
        } else if (currentElement.length !== previousElement.length && hasSameLength){
          alphabeticalySorted.push(previousElement);
          break;
        }
        if (index == arrLength - 1 && currentElement.length === previousElement.length){
          alphabeticalySorted.push(currentElement);
        }
      }
    }
    alphabeticalySorted.sort();
    alphabeticalySorted.reverse();
  
    for (let i = 0; i < arrLength; i++){
      if (arr[i].length == alphabeticalySorted[0].length){
        for (m = 0; m < alphabeticalySorted.length; m++){
          arr.splice(i,0,alphabeticalySorted[m]);
        }
        let startIndex = i + alphabeticalySorted.length;
        let deleteCount = alphabeticalySorted.length; 
        arr.splice(startIndex,deleteCount);
        break;
      }
    }
  
    for (let i = 0; i < arrLength; i++){
      console.log(arr[i]);
    }
  }
sortAnarraybyTwoCriteria([`test`,
    `Deny`,
    `omen`,
    `Default`])