function movies(arr) {
    let moviesNames = arr.filter(m => m.includes('addMovie')).map(m => m.substring(9));

    for (const movie of moviesNames) {
        let obj = { name: movie };

        for (let currentInfo of arr) {
            if (currentInfo.includes('directedBy')) {
                let [movieName, director] = currentInfo.split(' directedBy ');

                if (obj['name'] == movieName) {
                    obj['director'] = director;
                }
            } else if (currentInfo.includes('onDate')) {
                let [movieName, date] = currentInfo.split(' onDate ');

                if (obj['name'] == movieName) {
                    obj['date'] = date;
                }
            }
        }

        if (obj['name'] && obj['director'] && obj['date']) {
            console.log(JSON.stringify(obj));
        } else {
            obj = {};
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'addMovie Godfather',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'addMovie Misery',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);