function emlpoyees(data) {
    class Emlpoyee {
        constructor(name, personalNum) {
            this.name = name;
            this.personalNum = personalNum;
        }
    }

    for (let i = 0; i < data.length; i++) {
        let currentName = data[i];
        let currentPersNum = data[i].length;
        let currentEmployee = new Emlpoyee(currentName, currentPersNum);
        console.log(`Name: ${currentEmployee.name} -- Personal Number: ${currentEmployee.personalNum}`);
    }
}
emlpoyees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log("---DIVIDER---");
emlpoyees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);