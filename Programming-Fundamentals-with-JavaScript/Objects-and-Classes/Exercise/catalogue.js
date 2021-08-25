function catalogue(arr) {
    let stocks = arr.sort((a, b) => a.localeCompare(b));
    let catalogue = {};
    let initialArr = [];

    for (const stock of stocks) {
        let [product, price] = stock.split(' : ');
        price = Number(price);

        initialArr.push(product[0]);
        catalogue[product] = price;
    }

    let initials = Array.from(new Set(initialArr));
    let keys = Object.keys(catalogue);

    for (const initial of initials) {
        console.log(initial);

        while (keys[0][0] == initial) {
            console.log(`  ${keys[0]}: ${catalogue[keys[0]]}`);
            keys.shift();

            if (keys.length == 0) {
                break;
            }
        }
    }
}

catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);