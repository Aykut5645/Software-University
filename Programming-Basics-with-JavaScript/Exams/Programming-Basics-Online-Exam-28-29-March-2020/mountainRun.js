function mountainRun([arg1, arg2, arg3]) {
    let recordInSeconds = Number(arg1);
    let distanceInMetr = Number(arg2);
    let secondClimbOneMetr = Number(arg3);

    let mustClimb = distanceInMetr * secondClimbOneMetr;
    let slow = Math.floor(distanceInMetr / 50) * 30;
    let finalClimb = mustClimb + slow;

    if (finalClimb >= recordInSeconds) {
        let secondLeft = finalClimb - recordInSeconds;

        console.log(`No! He was ${secondLeft.toFixed(2)} seconds slower.`);
    } else {

        console.log(`Yes! The new record is ${finalClimb.toFixed(2)} seconds.`);
    }
}

mountainRun(["1377", "389", "3"]);