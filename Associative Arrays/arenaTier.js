function arenaTier(data) {
    let gladiatorObj = {};
    let index = 0;
    let command = data[index];
    index++;
    while (command !== 'Ave Cesar') {
      if (command.includes("->")) {
        let [gladiator, technique, skill] = command.split(" -> ");
        skill = Number(skill);
        if (!gladiatorObj.hasOwnProperty(gladiator)) {
          gladiatorObj[gladiator] = {};
          gladiatorObj[gladiator][technique] = skill;
          // gladiatorObj[gladiator]['totalSkill'] = skill;
  
        }
        if (!gladiatorObj[gladiator].hasOwnProperty(technique)) {
          gladiatorObj[gladiator][technique] = skill;
          // gladiatorObj[gladiator]['totalSkill'] += skill;
        }
        if (gladiatorObj[gladiator][technique] < skill) {
  
          gladiatorObj[gladiator][technique] = skill;
        }
      } else if (command.includes("vs")) {
        let [gladiator1, gladiator2] = command.split(' vs ');
        if (gladiatorObj.hasOwnProperty(gladiator1) && gladiatorObj.hasOwnProperty(gladiator2)) {
          let glad1Entries = Object.entries(gladiatorObj[gladiator1]);
          let glad2Entries = Object.entries(gladiatorObj[gladiator2]);
          for (const glad1Techniques of glad1Entries) {
            for (const glad2Techniques of glad2Entries) {
              if (glad1Techniques[0] === glad2Techniques[0] && glad1Techniques[0] !== "totalSkill") {
                if (glad1Techniques[1] > glad2Techniques[1]) {
                  delete gladiatorObj[gladiator2];
                  break;
                } else if (glad2Techniques[1] > glad1Techniques[1]) {
                  delete gladiatorObj[gladiator1];
                  break;
                }
              }
            }
          }
        }
      }
      command = data[index];
      index++;
    }
    let objEntries = Object.entries(gladiatorObj);
    let arrToSort = [];
    for (let el of objEntries) {
      let totalSkill = 0;
      arrToSort.push([el[0]])
      let elEntries = Object.entries(el[1]);
      for (let technique of elEntries) {
        arrToSort[objEntries.indexOf(el)].push(technique)
        totalSkill += technique[1];
      }
      arrToSort[objEntries.indexOf(el)].push([totalSkill])
    }
    arrToSort = arrToSort.sort((a, b) => {
      if (b[b.length - 1] - a[a.length - 1] == 0) {
        return a[0].localeCompare(b[0]);
      }
      return b[b.length - 1] - a[a.length - 1];
    });
  
    for (gladiator of arrToSort){
      console.log(`${gladiator[0]}: ${gladiator[gladiator.length - 1]} skill`);
      let tehniquesArr = [];
      for (let i= 1; i < gladiator.length - 1; i++){
        let technique = gladiator[i];
        tehniquesArr.push(technique);
      }
      tehniquesArr.sort((a,b) => {
        if (b[1] - a[1] == 0){
          return a[0].localeCompare(b[0]);
        }
        return  b[1] - a[1]});
      for (const current of tehniquesArr) {
          console.log(`- ${current[0]} <!> ${current[1]}`);
      }
    }
  }
// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]);
console.log('---DIVIDER---');
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);