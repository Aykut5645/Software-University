function songs(arr) {
    class songsInfo {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        chekedSongs() {
            console.log(`${this.name}`);
        }
    }

    let songs = arr;
    let songsCount = songs.shift();
    let typeCheck = songs.pop();

    for (let i = 0; i < songsCount; i++) {
        let currentSong = songs[i].split('_');
        let [currentType, currentName, currentTime] = currentSong;

        let currentSongInfo = new songsInfo(currentType, currentName, currentTime);

        if (typeCheck == 'all') {
            currentSongInfo.chekedSongs();
            continue;
        }

        if (currentType == typeCheck) {
            currentSongInfo.chekedSongs();
        } else {
            continue;
        } 
    }
}

songs(
        [3,
        'favourite_DownTown_3:14',
        'favourite_Kiss_4:16',
        'favourite_Smooth Criminal_4:01',
        'favourite']
);

/*
function solve(listOfSongs) {
    let songsCount = listOfSongs.shift();
    let correctType = listOfSongs.pop();

    for (let i = 0; i < songsCount; i++) {
        let currentSong = listOfSongs[i].split('_');
        let obj = {
            type: currentSong[0],
            name: currentSong[1],
            time: currentSong[2],
            printCorrectSongs() {
                if (correctType == this.type) {
                    return this.name;
                } else if (correctType == 'all') {
                    return this.name;
                }
            }
        };

        console.log(obj.printCorrectSongs());
    }
}
*/