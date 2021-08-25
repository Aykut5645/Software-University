function solve(arr) {
    let objectsArr = [];
            
    for (const info of arr) {
        let obj = {};
        let [hero, level, items] = info.split(' / ');
        level = Number(level);

        obj['Hero'] = hero;
        obj['level'] = level;
        obj['items'] = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');

        objectsArr.push(obj);
    }

    objectsArr.sort((a, b) => a['level'] - b['level']).forEach(obj => {
        console.log(`Hero: ${obj['Hero']}`);
        console.log(`level => ${obj['level']}`);
        console.log(`items => ${obj['items']}`);
    });
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);