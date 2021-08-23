function numbers1toN(arg) {
    let n = Number(arg);

    for (let i = 1; i <= n; i+=3) {
        console.log(i);
    }
}

numbers1toN(10);