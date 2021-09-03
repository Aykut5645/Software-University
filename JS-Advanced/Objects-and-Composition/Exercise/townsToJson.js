function foo(arr) {
    let data = arr.map(line => line.split('|').filter(x => x != '').map(x => x.trim()));
    let keys = data.shift();
    let resultArr = [];

    data.forEach(info => {
        obj = {
            [keys[0]]: info[0],
            [keys[1]]: Number(Number(info[1]).toFixed(2)),
            [keys[2]]: Number(Number(info[2]).toFixed(2)),
        }

        resultArr.push(obj);
    });

    return JSON.stringify(resultArr);
}

console.log(
    foo(
        [
            '| Town | Latitude | Longitude |',
            '| Sofia | 42.696552 | 23.32601 |',
            '| Beijing | 39.913818 | 116.363625 |'
        ]
    )
);