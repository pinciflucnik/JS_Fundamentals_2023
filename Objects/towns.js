function towns(data) {
    // class Town{
    //     constructor(name, latitude, longitude) {
    //         this.town = name;
    //         this.latitude = latitude;
    //         this.longitude = longitude;
    //     }
    // }

    let townsArr = [];
    for (let i = 0; i < data.length; i++){
        let curData = data[i].split(" | ");
        let curName = curData[0];
        let curLatitude = Number(curData[1]).toFixed(2);
        let curLongitude = Number(curData[2]).toFixed(2);

        // let curTown = new Town(curName, curLatitude, curLongitude);
        let curTown = {
            town: curName,
            latitude: curLatitude,
            longitude: curLongitude
        }
        townsArr.push(curTown);
        console.log(curTown);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
console.log("---DIVIDER---");
towns(['Plovdiv | 136.45 | 812.575']);