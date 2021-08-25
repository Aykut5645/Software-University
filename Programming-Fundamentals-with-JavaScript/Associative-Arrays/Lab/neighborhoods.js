function neighborhoods(list) {
    let neighborhoods = list.shift().split(', ');
    let currentNeighborhood = list;
    let object = {};

    for (const neighborhood of neighborhoods) {
        object[neighborhood] = [];
    }

    for (let i = 0; i < currentNeighborhood.length; i++) {
        let [name, person] = currentNeighborhood[i].split(' - ');

        if (neighborhoods.includes(name)) {
            object[name].push(person);
        }
    }

    Object.entries(object)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(kvp => {
            console.log(`${kvp[0]}: ${kvp[1].length}`)
            kvp[1].forEach(person => {
                console.log(`--${person}`);
            });
        });
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);