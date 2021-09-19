function argumentInfo() {
    [...arguments]
        .forEach(element => {
            console.log(`${typeof (element)}: ${element}`);
        });

    let obj = [...arguments].reduce((acc, x) => {
        acc[typeof (x)]
            ? acc[typeof (x)] += 1
            : acc[typeof (x)] = 1

        return acc;
    }, {});

    Object.keys(obj)
        .sort((a, b) => obj[b] - obj[a])
        .forEach(type => console.log(`${type} = ${obj[type]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });