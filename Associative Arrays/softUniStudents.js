function softUniStudents(input){
    let dataBase = {};
    for (let line of input) {
        if (line.includes(':')){
            line = line.split(': ');
            let courseName = line[0];
            let courseCapacity = Number(line[1]);
            if (!dataBase.hasOwnProperty(courseName)){
                dataBase[courseName] = {};
                dataBase[courseName]['capacity'] = 0;
                dataBase[courseName]['filled'] = 0;

            }
            dataBase[courseName]['capacity'] += courseCapacity;

        } else {
            line = line.split(' ');
            let indexForCredits = line[0].indexOf('[');
            let indexForCourse = line.indexOf('joins') + 1;
            let userName = line[0].slice(0, indexForCredits);
            let creditPoints = Number(line[0].slice(indexForCredits + 1, line[0].length - 1));
            let eMail = line[3];
            let studentCourse = line.slice(indexForCourse).join('');
            if (dataBase.hasOwnProperty(studentCourse) && dataBase[studentCourse]['filled'] < dataBase[studentCourse]['capacity']){
                dataBase[studentCourse][userName] = {
                    'e-mail': eMail,
                    'credits': creditPoints
                };
                dataBase[studentCourse]['filled'] ++;
            }
        }     
    }
    let entriesOfDB = Object.entries(dataBase);
    entriesOfDB.sort((a,b) => b[1]['filled']- a[1]['filled']);
    for (const course of entriesOfDB) {
        let courseEntries = Object.entries(course[1]);
        let placesLeft = courseEntries[0][1] - courseEntries[1][1];
        courseEntries.sort((a,b) => {
            if (a[0] !== 'filled' && a[0] !== 'capacity' && b[0] !== 'filled' && b[0] !== 'capacity'){
                return b[1]['credits'] - a[1]['credits'];
            }
        }); 
        console.log(`${course[0]}: ${placesLeft} places left`);
        for (const student of courseEntries) {
            if (student[0] !== 'filled' && student[0] !== 'capacity')
            console.log(`--- ${student[1]['credits']}: ${student[0]}, ${student[1]['e-mail']}`)            
        }        
    }
}
// softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);
console.log('----DIVIDER----');
softUniStudents(['JavaBasics: -2',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'C#Advanced: 1',
'user1[26] with email user1@user.com joins C#Advanced',
])
// 'JavaBasics: 5',
// 'C#Advanced: 5',
// 'user1[26] with email user1@user.com joins C#Advanced',
// 'user2[36] with email user11@user.com joins C#Advanced',
// 'user3[6] with email user3@user.com joins C#Advanced',
// 'C#Advanced: 1',
// 'JSCore: 8',
// 'user23[62] with email user23@user.com joins JSCore']);