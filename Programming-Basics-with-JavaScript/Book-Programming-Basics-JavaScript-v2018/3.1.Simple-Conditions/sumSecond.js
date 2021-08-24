function sumSecond([arg1, arg2, arg3]) {
    let firstRacer = Number(arg1);
    let secondRacer = Number(arg2);
    let thirdRacer = Number(arg3);

    let sumSeconds = firstRacer + secondRacer + thirdRacer;
    let minutes = parseInt(sumSeconds / 60);
    let seconds = sumSeconds % 60;

    if (seconds <= 9) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSecond(["35", "45", "44"])