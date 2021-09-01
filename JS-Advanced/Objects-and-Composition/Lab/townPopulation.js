function foo(arr) {
    let obj = arr.reduce((acc, x) => {
        let [town, population] = x.split(' <-> ');
        population = Number(population);

        acc[town]
            ? acc[town] += population
            : acc[town] = population;

        return acc;
    }, {});

    let newArr = [];

    for (const [town, population] of Object.entries(obj)) {
        newArr.push(`${town} : ${population}`)
    }

    return newArr.join('\n');
}

console.log(
    foo(
        [
            'Sofia <-> 1200000',
            'Montana <-> 20000',
            'New York <-> 10000000',
            'Washington <-> 2345000',
            'Las Vegas <-> 1000000'
        ]
    )
);