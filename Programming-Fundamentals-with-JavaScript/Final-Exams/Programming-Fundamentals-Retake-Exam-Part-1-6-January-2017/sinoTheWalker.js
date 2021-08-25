function sinoTheWalker(input) {
    let timeArrived = input[0];
    let steps = Number(input[1]);
    let secByStep = Number(input[2]);

    let [hours, minutes, seconds] = timeArrived.split(':').map(Number);
    let hoursAsSec = hours * 3600;
    let minAsSec = minutes * 60;
    let totalSec = (seconds + (steps * secByStep) + hoursAsSec + minAsSec) % 86400;

    let finalHours = Math.trunc(totalSec / 3600);
    let finalMin = Math.trunc((totalSec % 3600) / 60);
    let finalSec = totalSec % 60;

    if (finalHours > 24) {
        finalHours = (finalHours - 24);
    } 
    
    if (finalHours < 10) {
        finalHours = `0${finalHours}`;
    }

    if (finalMin < 10) {
        finalMin = `0${finalMin}`;
    }
    
    if (finalSec < 10) {
        finalSec = `0${finalSec}`;
    }

    console.log(`Time Arrival: ${finalHours}:${finalMin}:${finalSec}`);
}

sinoTheWalker(['12:30:30', '90', '1']);
sinoTheWalker(['03:49:13', '5424', '2', '']);