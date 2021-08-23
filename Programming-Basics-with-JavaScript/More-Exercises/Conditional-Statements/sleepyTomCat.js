function sleepyTomCat(arg) {
    let restDayCount = Number(arg);

    let playMinRestDay = 127;
    let playMinWorkDay = 63;
    let tomLimitPlay = 30000;

    let restDayMinYear = restDayCount * playMinRestDay;
    let workDayMinYear = (365 - restDayCount) * playMinWorkDay;
    let playInYear = restDayMinYear + workDayMinYear;
    
    if (tomLimitPlay > playInYear) {
        let minLeft = tomLimitPlay - playInYear;
        let hours = Math.trunc(minLeft / 60);
        let minutes = minLeft % 60;

        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }  else {
        let minNeed = playInYear - tomLimitPlay;
        let hours = Math.trunc(minNeed / 60);
        let minutes = minNeed % 60;

        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }
}

sleepyTomCat("75");