function netherRealms(input) {
    let deamonBook = {};
    let healthRegex = /[^0-9\+\-\*\/\.]/g;
    let simplePointsRegex = /[+-]?[0-9]+[.]?[0-9]*/g;
    let complPointRegex = /[\*\/]/g;
    let nameValidator = /[\s\,]/g;
    let monstersArr = input.split(/\s*,\s*/g);
    for (let monster of monstersArr) {
        if (!nameValidator.test(monster)) {
            let healthArr = monster.match(healthRegex);
            let health = 0;
            let damageArr = monster.match(simplePointsRegex);
            let damage = 0;
            let comlpCalcDamage = monster.match(complPointRegex);
            if (healthArr) {
                for (let el of healthArr) {
                    let healthPoints = el.charCodeAt();
                    health += Number(healthPoints);
                }
            }
            if (damageArr) {
                for (let el of damageArr) {
                    let damagePoints = Number(el);
                    damage += damagePoints;
                }
                if (comlpCalcDamage) {
                    for (let el of comlpCalcDamage) {
                        switch (el) {
                            case '/':
                                damage /= 2;
                                break;
                            case '*':
                                damage *= 2;
                                break
                        }
                    }
                }
            }
            deamonBook[monster] = {
                'health': health,
                'damage': damage
            }
        }
        nameValidator.lastIndex = 0;
    }
    let bookEntries = Object.entries(deamonBook);
    if (bookEntries.length > 1) {
        bookEntries.sort((a, b) => a[0].localeCompare(b[0]));
    }
    for (let monster of bookEntries) {
        console.log(`${monster[0]} - ${deamonBook[monster[0]]['health']} health, ${deamonBook[monster[0]]['damage'].toFixed(2)} damage`);
    }
}
netherRealms('057.65')
// netherRealms('M3ph-0.5s-0.5t0.0**');
console.log('---DIVIDER---');
netherRealms('M+3ph1st0**,     Azazel, Go0Sh/00,Pe600*');
console.log('---DIVIDER---');
// netherRealms('Gos/ho');