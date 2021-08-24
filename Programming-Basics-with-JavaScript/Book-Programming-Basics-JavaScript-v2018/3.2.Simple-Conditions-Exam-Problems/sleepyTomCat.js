function sleepyTomCat(input) {
    let restDayCount = Number([input]);
    let workDayCount = 365 - restDayCount;
    let timeLimit = 30000;

    let workDayPlay = workDayCount * 63;
    let restDayPlay = restDayCount * 127;
    let fullTimePlay = workDayPlay + restDayPlay;

    let difference = Math.max(timeLimit, fullTimePlay) - Math.min(timeLimit, fullTimePlay); 

    let hours = difference / 60;
    let minutes = difference % 60;

    if (timeLimit >= fullTimePlay) {
        console.log(`Tom sleeps well`);
        console.log(`${Math.trunc(hours)} hours and ${minutes} minutes less for play`);
    } else if (timeLimit < fullTimePlay) {
        console.log(`Tom will run away`);
        console.log(`${Math.trunc(hours)} hours and ${minutes} minutes more for play`);
    }
}

sleepyTomCat([113]);