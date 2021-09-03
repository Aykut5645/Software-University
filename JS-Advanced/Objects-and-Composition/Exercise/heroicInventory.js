function foo(arr) {
    let register = arr.reduce((acc, x) => {
        let [name, level, items] = x.split(' / ');
        items = items ? items.split(', ') : [];
        level = Number(level);

        let currentHero = { name, level, items };

        acc.push(currentHero);

        return acc;
    }, []);

    return JSON.stringify(register);
}

console.log(
    foo(
        [
            'Isacc / 25 / Apple, GravityGun',
            'Derek / 12 / BarrelVest, DestructionSword',
            'Hes / 1 / Desolator, Sentinel, Antara'
        ]
    )
);