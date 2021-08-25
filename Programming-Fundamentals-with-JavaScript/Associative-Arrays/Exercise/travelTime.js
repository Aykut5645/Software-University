function travelTime(initialArr) {
    let obj = {};

    for (let i = 0; i < initialArr.length; i++) {
        let [country, town, price] = initialArr[i].split(' > ');

        if (obj.hasOwnProperty(country)) {
            Object.keys(obj[country]).forEach(key => {
                if (key == town && obj[country][town] > price) {
                    obj[country][town] = price;
                }

                if (key != town) {
                    obj[country][town] = price;
                }
            });
        } else {
            obj[country] = { [town]: price };
        }
    };

    Object.keys(obj)
        .sort((a, b) => a.localeCompare(b))
        .forEach(country => {
            let townsArr = Object.entries(obj[country])
            if (townsArr.length > 1) {
                townsArr.sort((a, b) => a[1] - b[1]);
            }
            let counter = 1;
            let result = '';
            townsArr.forEach(townInfo => {
                if (townsArr.length == 1) {
                    console.log(`${country} -> ${townInfo[0]} -> ${townInfo[1]} `);
                } else {
                    if (counter == 1) {
                        result += `${country} -> ${townInfo[0]} -> ${townInfo[1]}`;
                    } else {
                        result += ` ${townInfo[0]} -> ${townInfo[1]}`;
                    }
                    counter++;
                }
            });
            if (townsArr.length > 1) {
                console.log(result);
            }
        });
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);