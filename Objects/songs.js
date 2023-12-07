function songs(data) {
    class Song {
        constructor(typelist, name, time) {
            this.typelist = typelist;
            this.name = name;
            this.time = time;
        }
    }
    let songsCount = Number(data[0]);
    let songsArr = [];

    for (let currentSongNumber = 1; currentSongNumber <= songsCount; currentSongNumber++) {
        let songData = data[currentSongNumber].split("_");
        let currentSong = new Song(songData[0], songData[1], songData[2]);
        songsArr.push(currentSong);
    }
    let command = data[data.length - 1];
    if (command === "all") {
        for (let i = 0; i < songsArr.length; i++) {
            let currentName = songsArr[i].name;
            console.log(currentName);
        }
    } else {
        for (let i = 0; i < songsArr.length; i++) {
            let currentTypeList = songsArr[i].typelist;
            if (currentTypeList === command) {
                let currentName = songsArr[i].name;
                console.log(currentName);
            }
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
console.log("----DIVIDER---");
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
])
console.log("----DIVIDER---");
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])