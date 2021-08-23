function lunchBreak([arg1, arg2, arg3]) {
    let tvShow = arg1;
    let tvShowTime = Number(arg2);
    let brеakTime = Number(arg3);

    let lunchTime = brеakTime * 1/8;
    let restTime = brеakTime * 1/4;

    let leftTime = brеakTime - lunchTime - restTime;

    if (leftTime >= tvShowTime) {
        timeForTvShow = Math.ceil(leftTime - tvShowTime);
        console.log(`You have enough time to watch ${tvShow} and left with ${timeForTvShow} minutes free time.`);
    } else {
        neededTime = Math.ceil(tvShowTime - leftTime);

        console.log(`You don't have enough time to watch ${tvShow}, you need ${neededTime} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);