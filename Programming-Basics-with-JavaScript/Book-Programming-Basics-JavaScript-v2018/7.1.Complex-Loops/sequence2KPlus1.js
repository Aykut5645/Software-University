function solve([arg1]) {
    let n = Number(arg1);

    for (let i = 1; i <= n; i = i * 2 + 1) {
        console.log(i);
    }
}

solve([31]);