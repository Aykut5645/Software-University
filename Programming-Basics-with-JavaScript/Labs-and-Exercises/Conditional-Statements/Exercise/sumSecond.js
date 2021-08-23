function sumSecond(arg1, arg2, arg3) {
    let timeFirst = Number(arg1);
    let timeSecond = Number(arg2);
    let timeThird = Number(arg3);

    let totalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {

        console.log(`${minutes}:0${seconds}`);
    } else {

        console.log(`${minutes}:${seconds}`);
    }
}

sumSecond("14", "12", "10");