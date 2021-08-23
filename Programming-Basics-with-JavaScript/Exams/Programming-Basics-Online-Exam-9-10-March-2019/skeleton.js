function skeleton([arg1, arg2, arg3, arg4]) {
    let controlInMin = Number(arg1);
    let controlInSeconds = Number(arg2);
    let distanceInMetr = Number(arg3);
    let secondsForHundredMetr = Number(arg4);

    let controlTime = controlInMin * 60 + controlInSeconds;
    let discount = (distanceInMetr / 120) * 2.5;

    let marinTime = (distanceInMetr / 100 * secondsForHundredMetr) - discount;

    if (marinTime <= controlTime) {
        
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    } else {
        neededTime = marinTime - controlTime

        console.log(`No, Marin failed! He was ${neededTime.toFixed(3)} second slower.`);
    }
}

skeleton(["1", "20", "1546", "12"]);