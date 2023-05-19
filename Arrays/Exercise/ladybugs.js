function ladybugs(input) {
    let index = 0;
    let fieldSize = input[index];
    index++;
    let bugsPosition = input[index];
    index++;
    let fieldArr = [];
    let bugsArr = [];
    let bugIndex = '';
    for (let n = 0; n < bugsPosition.length; n++) {
      if (bugsPosition[n] != " ") {
        bugIndex += bugsPosition[n];
      } else {
        bugsArr.push(Number(bugIndex));
        bugIndex = '';
      }
    }
    bugsArr.push(Number(bugIndex));
    for (let i = 0; i < fieldSize; i++) {
      fieldArr.push(0);
    }
    for (let i = 0; i < bugsArr.length; i++) {
      if (bugsArr[i] < fieldArr.length){
        fieldArr[bugsArr[i]] = 1;
      }
    }
    for (let m = index; m < input.length; m++) {
      let fullDirections = input[m];
      let directionRegex = /[A-Za-z]+/;
      let startRegex = /^\-?[0-9]+/;
      let lengthRegex = /\-?[0-9]+$/;
      let direction = String(fullDirections.match(directionRegex));
      let startIndex = Number(fullDirections.match(startRegex));
      let flightLength = Number(fullDirections.match(lengthRegex));
      if (fieldArr[startIndex] === 0 || startIndex >= fieldArr.length || startIndex < 0){
        continue;
      }
      if (flightLength < 0){
        flightLength = flightLength * (-1);
        switch (direction){
          case 'left': direction = 'right'; break;
          case 'right': direction = 'left'; break;
        }
      }
      switch (direction) {
        case 'left':
          fieldArr[startIndex] = 0;
          while (startIndex - flightLength >= 0 && fieldArr[startIndex - flightLength] != 0) {
            flightLength += flightLength;
          }
          if (startIndex - flightLength >= 0) {
            fieldArr[startIndex - flightLength] = 1;
          }
          break;
        case 'right':
          fieldArr[startIndex] = 0;
          while (startIndex + flightLength < fieldArr.length && fieldArr[startIndex + flightLength] != 0) {
            flightLength += flightLength;
          }
          if (startIndex + flightLength < fieldArr.length) {
            fieldArr[startIndex + flightLength] = 1;
          }  
          break;
      }
    }
    console.log(fieldArr.join(" "));
  }