function speedInfo([arg]) {
    let speed = Number(arg);

    if (speed <= 10) {
        speed = "slow";
    } else if (speed <= 50) {
        speed = "average";
    } else if (speed <= 150) {
        speed = "fast";
    } else if (speed <= 1000) {
        speed = "ultra fast";
    } else {
        speed = "extremely fast";
    }

    console.log(speed);
}

speedInfo(["3500"]);