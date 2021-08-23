function evenPowersOf2(arg) {
    let maxPower = Number(arg);

    for (let i = 0; i <= maxPower; i+=2) {
        console.log(Math.pow(2, i));
    }
}

evenPowersOf2(5);