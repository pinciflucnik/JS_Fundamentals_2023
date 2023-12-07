function heroesOfCodeAndLogicVII(input){
    let count = Number(input.shift());
    let index = 0;
    let heroes = {};
    for (let i = 0; i < count; i++){
        let tokens = input.shift().split(' ');
        let name = tokens[0];
        let hitPoints = Number(tokens[1]);
        let mana = Number(tokens[2]);
        heroes[name] = {
            'hitPoints': hitPoints,
            'mana': mana
        }
    }   
    let line = input[index];
    index++;
    while (line !== 'End'){
        let tokens = line.split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        if (!heroes.hasOwnProperty(name)){
            line = input[index];
            index++;        
            break;
        }
        switch (command){
            case 'CastSpell':
                let neededMP = Number(tokens[2]);
                let spellName = tokens[3];
                if (heroes[name]['mana'] >= neededMP){
                    heroes[name]['mana'] -= neededMP;
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name]['mana']} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(tokens[2]);
                let attackerName = tokens[3];
                heroes[name]['hitPoints'] -= damage;
                if ( heroes[name]['hitPoints'] > 0){
                    console.log(`${name} was hit for ${damage} HP by ${attackerName} and now has ${heroes[name]['hitPoints']} HP left!`);
                } else {
                    console.log(`${name} has been killed by ${attackerName}!`);
                    delete heroes[name];
                }
                break;
            case 'Recharge':
                let rechargeAmount = Number(tokens[2]);
                if (heroes[name]['mana'] + rechargeAmount > 200){
                    rechargeAmount = 200 - heroes[name]['mana']; 
                }
                heroes[name]['mana'] += rechargeAmount;
                console.log(`${name} recharged for ${rechargeAmount} MP!`);
                break;
            case 'Heal':
                let healAmount = Number(tokens[2]);
                if (heroes[name]['hitPoints'] + healAmount > 100){
                    healAmount = 100 - heroes[name]['hitPoints'];
                }
                heroes[name]['hitPoints'] += healAmount;
                console.log(`${name} healed for ${healAmount} HP!`);
                break;

        }
        line = input[index];
        index++;
    } 
    for (const hero in heroes) {
        console.log(`${hero}\n  HP: ${heroes[hero]['hitPoints']}\n  MP: ${heroes[hero]['mana']}`);
    }
}
// heroesOfCodeAndLogicVII([
//     "2",
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End"
//     ]);
console.log('---DIVIDER---');
heroesOfCodeAndLogicVII([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]);