function oddOccurrences(string){
    let arrOfString = string.toLowerCase().split(" ");
    let map = new Map();
    for (let i = 0; i < arrOfString.length; i++){
        let value = 1;
        for (let j = i+1; j < arrOfString.length; j++){
            if(arrOfString[i] === arrOfString[j]){
                value = value + 1;
            }
        }
        if (!map.get(arrOfString[i])){

            map.set(arrOfString[i],value);
        }
    }
    let result = [];
    for (let pair of map){
        if (pair[1] % 2 !== 0){
            result.push(pair[0]);
        }
    }
    console.log(result.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log(`---DIVIDER---`);
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');