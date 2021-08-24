function solve([arg1]) {
    let n = Number(arg1);

    for (let i = 0; i <= n; i += 2) {
        console.log(Math.pow(2, i));
    }
}

solve([10]);