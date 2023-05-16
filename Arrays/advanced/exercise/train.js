function train(input) {
    let trainArr = Array.from(input[0]);
    let capacity = input[1];
    let commandRegex = /[A-Za-z]+/g;
    let passengersRegex = /[0-9]+/g;
    let current = "";
    let sortedTrainArr = [];
    for (let m = 0; m < trainArr.length; m++) {
      let toCheck = trainArr[m]
      if (m == trainArr.length - 1) {
        current += toCheck
        sortedTrainArr.push(current);
        break;
      }
      if (toCheck != ' ') {
        current += trainArr[m]
      }
      else if (toCheck == " ") {
        sortedTrainArr.push(current);
        current = "";
      }
    }
    for (let i = 2; i < input.length; i++) {
      let command = input[i].match(commandRegex);
      let passengers = input[i].match(passengersRegex);
      if (command != null && command[0] == "Add") {
        sortedTrainArr.push(passengers[0])
      }
      else {
        for (let m = 0; m < sortedTrainArr.length; m++) {
          if (Number(sortedTrainArr[m]) + Number(passengers) <= Number(capacity)) {
            sortedTrainArr[m] = Number(sortedTrainArr[m]) + Number(passengers);
            break;
          }
        }
      }
    }
    current = "";
    for (let p = 0; p < sortedTrainArr.length; p++){
      current += sortedTrainArr[p] + " ";
    }
    console.log(current);
  }
train(['32 5',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])