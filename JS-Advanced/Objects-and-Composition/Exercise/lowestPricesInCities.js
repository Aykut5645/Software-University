function foo(arr) {
    let obj = arr.reduce((a, x) => {
        let [town, product, price] = x.split(' | ');
        price = Number(price);

        a[product] ? a[product][town] = price : a[product] = { [town]: price };

        return a;
    }, {});

    Object.entries(obj).forEach(([product, insideObj]) => {
        Object.keys(insideObj)
            .sort((a, b) => obj[product][a] - obj[product][b])
            .slice(0, 1)
            .forEach(town => console.log(`${product} -> ${obj[product][town]} (${town})`));
    });

}

foo(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
);