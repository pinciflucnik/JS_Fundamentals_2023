function sortAnarraybyTwoCriteria (arr){
    function sortBylength (arrToSort){
      return arrToSort.sort((a,b) => a.length - b.length);
    }
    arr = sortBylength(arr);
    let arrLength = arr.length;
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