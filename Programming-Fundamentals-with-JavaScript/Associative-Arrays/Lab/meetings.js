function meetings(days) {
    let finalSchedule = {};
    
    for (const currentDay of days) {
        let currentDayArr = currentDay.split(' ');
        let [weekday, personName] = currentDayArr;

        if (finalSchedule[weekday]) {
            console.log(`Conflict on ${weekday}!`);
            continue;
        } else {
            console.log(`Scheduled for ${weekday}`);
        }
        
        finalSchedule[weekday] = personName;       
    }   

    for (const key in finalSchedule) {
        console.log(`${key} -> ${finalSchedule[key]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);