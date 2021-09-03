function foo(arr) {
    let catalogue = arr.reduce((acc, x) => {
        let [product, price] = x.split(' : ');

        acc[product[0]]
            ? acc[product[0]][product] = price
            : acc[product[0]] = { [product]: price };

        return acc;
    }, {});

    Object.keys(catalogue).sort((a, b) => a.localeCompare(b))
        .forEach(letter => {
            console.log(letter);
            Object.keys(catalogue[letter]).sort((a, b) => a.localeCompare(b))
                .forEach(product => {
                    console.log(`  ${product}: ${catalogue[letter][product]}`);
                });
        });
}

foo(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);