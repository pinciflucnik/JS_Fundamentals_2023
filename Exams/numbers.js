function numbers(input) {
    let arr = input.split(" ").map(Number);
    let sum = 0;
    
    for (let index = 0; index < arr.length; index++){
        sum += arr[index];
    }
    let average = sum / arr.length;
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        let current = arr[i];
        if (current > average){
            newArr.push(current);
        }
    }
    let isValidArr = true;
    newArr = newArr.sort((a,b) => b - a);
    if (newArr.length > 5){
        newArr = newArr.slice(0,5);
    } else if (newArr.length == 0){
        isValidArr = false;
        console.log("No");
    }

    if (isValidArr){
        console.log(newArr.join(" "));
    }
}
numbers('10 20 30 40 50');
console.log("-----");
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log("-----");
numbers('1');
console.log("-----");
numbers('-1 -2 -3 -4 -5 -6');