function foo(stepsCount, stepLength, speedKmInHours) {
    let distanceInMeters = stepsCount * stepLength;
    let speedMetersInSec = speedKmInHours / 3.6;

    let breakTimeInSec = Math.trunc(distanceInMeters / 500) * 60;
    let totalTimeInSec = distanceInMeters / speedMetersInSec + breakTimeInSec;

    let hours = Math.trunc(totalTimeInSec / 3600);
    let minutes = Math.trunc(totalTimeInSec / 60);
    let seconds = Math.ceil(totalTimeInSec % 60);

    return `${hours = hours < 10
        ? `0${hours}` : hours}:${minutes = minutes < 10
            ? `0${minutes}` : minutes}:${seconds = seconds < 10
                ? `0${seconds}` : seconds}`;
}

console.log(
    foo(4000, 0.60, 5)
);