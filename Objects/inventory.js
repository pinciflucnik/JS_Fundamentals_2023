function inventory(data) {
    let heroArr = [];
    for (let i = 0; i < data.length; i++){
        let heroData = data[i].split(" / ")
        let currentHero = {
            name: heroData.shift(),
            level: heroData.shift(),
        }
        if (heroData.length > 1){
            for (let j = 0; j < heroData.length; j++){
                currentHero.items += `, ${heroData[j]}`
            }
        } else {
            currentHero.items = heroData[0];
        }
        heroArr.push(currentHero);
    }
    let sortedHeroArr = heroArr.sort((a,b) => a.level - b.level )
    
    for (hero of sortedHeroArr){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
console.log("---DIVIDER---");
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ])