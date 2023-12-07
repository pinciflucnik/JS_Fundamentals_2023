function armies(data) {
    let armiesObj = {};
    for (let line of data){
        if (line.includes('arrives') || line.includes('defeated')){
            let tokens = line.split(' ');
            let command = tokens.pop();
            let name = tokens.join(' ');
            switch (command){
                case 'arrives':
                    if (!armiesObj.hasOwnProperty(name)){
                        armiesObj[name] = {};
                    }
                    break;
                case 'defeated':
                    if (armiesObj.hasOwnProperty(name)){
                        delete armiesObj[name];
                    }
                    break;
            }
        } else if (line.includes(':')){
            let [name, armyTokens] = line.split(': ');
            armyTokens = armyTokens.split(', ');
            let armyName = armyTokens[0];
            let armyCount = Number(armyTokens[1]);
            if (armiesObj.hasOwnProperty(name)){
                armiesObj[name][armyName] = armyCount;
            }

        } else if (line.includes('+')){
            let [armyName, armyCount] = line.split(' + ');
            for (let leader in armiesObj){
                if (armiesObj[leader].hasOwnProperty(armyName)){
                    armiesObj[leader][armyName] += Number(armyCount);
                }
            }
        }
        
    }
    for (let leader in armiesObj){
        let sum = 0;
        for (let army in armiesObj[leader]){
            sum += armiesObj[leader][army];
        }
        armiesObj[leader]['total'] = sum;
    }
    let armiesEntries = Object.entries(armiesObj);
    let armiesValules = Object.values(armiesObj);
    armiesEntries.sort((a,b) =>  b[1].total - a[1].total);

    for (let leader of armiesEntries){
        let ownArmiesArr = Object.entries(leader[1]);
        let total = ownArmiesArr.pop();
        console.log(`${leader[0]}: ${total[1]}`);
        ownArmiesArr.sort((a,b) => b[1] - a[1]);
        for (let army of ownArmiesArr){
            console.log(`>>> ${army[0]} - ${army[1]}`);
        }
    }
    
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
console.log(`---DIVIDER---`);
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);