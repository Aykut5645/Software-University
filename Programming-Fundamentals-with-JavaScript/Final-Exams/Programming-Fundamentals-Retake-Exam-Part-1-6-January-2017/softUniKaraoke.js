function softUniKaraoke(input) {
    let obj = {};
    let singers = input.shift().split(/,[ ]+/g);
    let songs = input.shift().split(/,[ ]+/g);

    singers.forEach(singer => obj[singer] = []);

    let line;

    while ((line = input.shift()) != 'dawn') {
        let [singer, song, award] = line.split(/,[ ]/g);

        if (singers.includes(singer) && songs.includes(song)) {
            if (!obj[singer].includes(award)) {
                obj[singer].push(award);
            }
        }
    }

    let isHaveAward = false;

    for (const key in obj) {
        let awards = obj[key];

        for (const award in awards) {
            if (award.length > 0) {
                isHaveAward = true;
                break;
            }
        }

        if (isHaveAward) {
            break;
        }
    }

    if (isHaveAward) {
        Object.entries(obj).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])).forEach(el => {
            if (el[1].length > 0) {
                console.log(`${el[0]}: ${el[1].length} awards`);
            } else {
                delete obj[el[0]];
            }

            el[1].sort((a, b) => a.localeCompare(b)).forEach(award => {
                console.log(`--${award}`);
            });
        });
    } else {
        console.log('No awards');
    }
}

softUniKaraoke([
    'Trifon, Vankata, Gesha',
    "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn'
]);

softUniKaraoke([
    'Gesha',
    "Bon Jovi - It's my life",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn'
]);

softUniKaraoke(['Sino', 'Vasko Naidenov - Nova Godina', 'dawn']);
