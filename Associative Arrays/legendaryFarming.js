function legendaryFarming(data) {
    data = data.split(' ');
    let minedObj = {};
    let junkArr = [];
    minedObj['shards'] = 0;
    minedObj['fragments'] = 0;
    minedObj['motes'] = 0;
    for (let i = 0; i < data.length; i += 2) {
        let quantity = Number(data[i]);
        let material = data[i + 1].toLowerCase();
        switch (material) {
            case 'shards':
            case 'fragments':
            case 'motes':
                if (!minedObj.hasOwnProperty(material)) {
                    minedObj[material] = 0;
                }
                minedObj[material] += quantity
                break;
            default:
                let bufferArr = [material, quantity];
                if (junkArr.length == 0) {
                    junkArr.push(bufferArr);
                    break;
                }
                for (let entry of junkArr) {
                    let totQuantity = 0;
                    if (entry[0] === material) {
                        totQuantity = entry[1] + quantity;
                        entry[1] = totQuantity;
                    } else {
                        junkArr.push(bufferArr);
                        break;
                    }
                }
                break;
        }
        if (minedObj[material] >= 250) {
            let legendayItem = '';
            switch (material) {
                case 'shards':
                    legendayItem = 'Shadowmourne';
                    break;
                case 'fragments':
                    legendayItem = 'Valanyr';
                    break;
                case 'motes':
                    legendayItem = 'Dragonwrath'
                    break;
            }
            console.log(`${legendayItem} obtained!`);
            minedObj[material] -= 250;
            break;
        }
    }
    let objEntries = Object.entries(minedObj);
    objEntries.sort((a, b) => {
        if (b[1] - a[1] == 0) {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    })
    for (let entry of objEntries) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
    junkArr.sort((a, b) => a[0].localeCompare(b[0]))
    for (let entry of junkArr) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log('---DIVIDER---');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');