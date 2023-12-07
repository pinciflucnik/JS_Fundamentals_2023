function legendaryFarming(data) {
    let legendaryObj = {
        'shards': 0,
        'fragments': 0,
        'motes': 0,
        'junk': {}
    };
    let dataArr = data.split(' ');
    dataLength = dataArr.length;
    for (let i = 0; i < dataLength; i += 2) {
        let quantity = Number(dataArr[i]);
        let material = dataArr[i + 1].toLowerCase();
        if (legendaryObj.hasOwnProperty(material)){
            let obtainedLegendary = false;
            legendaryObj[material] += quantity;
            if (legendaryObj[material] >= 250){
                obtainedLegendary = true;
                legendaryObj[material] -= 250;
                switch (material){
                    case 'shards': console.log('Shadowmourne obtained!');
                        break;
                    case 'fragments': console.log('Valanyr obtained!');
                        break;
                    case 'motes': console.log('Dragonwrath obtained!');
                        break;
                }
            }
            if (obtainedLegendary){
                break;
            }
        } else {
            if(!legendaryObj['junk'].hasOwnProperty(material)){
                legendaryObj[`junk`][material] = 0;
            }
            legendaryObj[`junk`][material] += quantity;
        }
    }
    let entries = Object.entries(legendaryObj);
    entries.sort((a,b) => {
        if (a[0]!== 'junk' && b[0] !== 'junk'){
            if (b[1]- a[1] == 0){
                return a[0].localeCompare(b[0]);
            }
            return b[1]- a[1];
        }
    });
    for (const element of entries) {
        if (element[0] !== 'junk'){
            console.log(`${element[0]}: ${element[1]}`);
        } else {
            let junkEntries = Object.entries(legendaryObj['junk']);
            junkEntries.sort((a,b) => a[0].localeCompare(b[0]));
            for (const junkItem of junkEntries) {
                console.log(`${junkItem[0]}: ${junkItem[1]}`);                
            }
        }      
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log('---DIVIDER---');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');