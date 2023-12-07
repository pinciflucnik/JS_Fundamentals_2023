function schoolGrades(data) {
    function sum(arr){
        let totalSum = 0;
        for (element of arr){
            totalSum += Number(element);
        }
        return totalSum;
    }
    let gradeBook = {};
    for (line of data){
        let tokens = line.split(" ");
        let name = tokens.shift();
        let grades = [];
        if (gradeBook.hasOwnProperty(name)){
            grades = gradeBook[name];
            for (let i = 0; i < tokens.length; i++){
                grades.push(tokens[i]);
            }
            gradeBook[name] = grades;
        } else {
                        for (let i = 0; i < tokens.length; i++){
                grades.push(tokens[i]);
            }
            gradeBook[name] = grades;

        }
    }
    for (el in gradeBook){
        let divider = gradeBook[el].length;
        let sumOfGrades = sum(gradeBook[el]);
        gradeBook[el] = (sumOfGrades / divider).toFixed(2);
    }
    let keys = Object.keys(gradeBook);
    keys.sort((a,b) => a.localeCompare(b))
    for (let i = 0; i < keys.length; i++){
        for (element in gradeBook){
            if (keys[i] === element){
                console.log(`${element}: ${gradeBook[element]}`);
            }
        }
    }

}
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])
