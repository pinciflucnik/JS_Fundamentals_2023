function bonusScoringSystem(input) {
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let bonus = Number(input.shift());
    let inputLength = input.length;
    let maxBonus = 0;
    let attendanceOfMax = 0;

    for (let i = 0; i < inputLength; i++){
        let currentAttendance = Number(input[i]);
        
        let currentStudentBonus = Math.ceil(currentAttendance / lecturesCount * (5 + bonus));
        if (currentStudentBonus >= maxBonus){
            maxBonus = currentStudentBonus;
            if (currentAttendance > attendanceOfMax){

                attendanceOfMax = currentAttendance;
            }
        }
    }


    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${attendanceOfMax} lectures.`);
}
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]);
  console.log("-----");
  bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);
