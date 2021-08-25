function city(currentCity) {
    let entries = Object.entries(currentCity);

    for (const prop of entries) {
        let key = prop[0];
        let value = prop[1];

        console.log(`${key} -> ${value}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

/*
function city(cityInfo) {
    for (const keys of Object.keys(cityInfo)) {
        console.log(`${keys} -> ${cityInfo[keys]}`);
    }
}

let input = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
};


city(input);

/*
function city(currentCity) {
    let keys = Object.keys(currentCity);
    let values = Object.values(currentCity);

    for (let i = 0; i < keys.length; i++) {
        let currentKey = keys[i];
        for (let j = 0 + i; j < values.length; j++) {
            let currentValue = values[j];

            console.log(`${currentKey} -> ${currentValue}`);
            break;
        }
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
*/
/*
function city(currentCity) {
    let keys = Object.keys(currentCity);
    let values = Object.values(currentCity);
    let needInd = 0;

    for (let keyInd in keys) {
        let currentKey = keys[keyInd];

        for (let valueInd in values) {
            valueInd = needInd;
            let currentValue = values[valueInd];

            console.log(`${currentKey} -> ${currentValue}`);
            break;
        }

        needInd++;
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});*/