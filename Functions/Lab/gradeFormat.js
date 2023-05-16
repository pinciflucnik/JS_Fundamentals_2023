function gradeFormat(grade){
    if (grade < 3.00){
        return console.log("Fail (2)");
    }
    else if (grade < 3.50){
        return console.log(`Poor (${grade.toFixed(2)})`);
    }
    else if (grade < 4.50){
        return console.log(`Good (${grade.toFixed(2)})`);
    }
    else if (grade < 5.50){
        return console.log(`Very good (${grade.toFixed(2)})`);
    }
    else {
        return console.log(`Excellent (${grade.toFixed(2)})`);
    }
}
gradeFormat(7)