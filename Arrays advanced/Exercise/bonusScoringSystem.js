function bonusScoringSystem (data){
    data = data.map(a => Number(a));
    let index = 0;
    let numberOfStudents = data[index];
    index++;
    let numberOfLectures = data[index];
    index++;
    let additionalBonus = data[index];
    index++;
    let attendanceArr = data.slice(index);
    let attendanceArrLength = attendanceArr.length;
    let bonusPointArr = [];
    for (let i = 0; i < attendanceArrLength; i++){
        let bonus = attendanceArr[i] / numberOfLectures * (5 + additionalBonus);
        bonusPointArr.push(bonus);
    }
    let maxBonus = Math.max(...bonusPointArr);
    let indexOfMaxBonusStudent = bonusPointArr.indexOf(maxBonus);
    let attendedLectures = attendanceArr[indexOfMaxBonusStudent];
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${Math.ceil(attendedLectures)} lectures.`);
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])