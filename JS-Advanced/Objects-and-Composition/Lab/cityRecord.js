function foo(...params) {
    return {
        name: params[0],
        population: params[1],
        treasury: params[2]
    };
}

console.log(
    foo(
        'Tortuga',
        7000,
        15000
    )
);