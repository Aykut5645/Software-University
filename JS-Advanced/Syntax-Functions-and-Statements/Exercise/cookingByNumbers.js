function foo(...arr) {
    let num = Number(arr.shift());

    const operations = {
        'chop': () => num = num / 2,
        'dice': () => num = Math.sqrt(num),
        'spice': () => num += 1,
        'bake': () => num *= 3
    };
    
    return arr
        .map(x => {
            return operations[x] != undefined
                ? operations[x]()
                : x * 0.80
        })
        .join('\n');
}

console.log(
    foo('32', 'chop', 'chop', 'chop', 'chop', 'chop')
);