function worldSwimmingRecord(arg1, arg2, arg3) {
    let recordInSecond = Number(arg1);
    let distanceInMetr = Number(arg2);
    let timeInOneMetrInSecond = Number(arg3);

    let distance = distanceInMetr * timeInOneMetrInSecond;
    let delay = Math.floor(distanceInMetr / 15) * 12.5;
    let finalDistanceInSecond = distance + delay;

    if (recordInSecond <= finalDistanceInSecond) {
        let timeNotEnough = finalDistanceInSecond - recordInSecond;

        console.log(`No, he failed! He was ${timeNotEnough.toFixed(2)} seconds slower.`);

    } else if (finalDistanceInSecond < recordInSecond) {
        	
        console.log(`Yes, he succeeded! The new world record is ${finalDistanceInSecond.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord("10464", "1500", "20");