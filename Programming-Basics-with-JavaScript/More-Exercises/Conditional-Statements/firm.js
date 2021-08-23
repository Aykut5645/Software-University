function firm(arg1, arg2, arg3) {
    let hoursForProject = Number(arg1);
    let daysCount = Number(arg2);
    let overtimeWorkers = Number(arg3);
    let hoursForDay = 8;

    let hoursWithoutLearn = daysCount - (10 * 1/100 * daysCount);
    let hoursForWork = hoursWithoutLearn * hoursForDay;
    let overtimeHours = overtimeWorkers * (daysCount * 2);
    let finalHours = Math.floor(hoursForWork + overtimeHours); 

    if (finalHours >= hoursForProject) {
        let leftHours = finalHours - hoursForProject;

        console.log(`Yes!${leftHours} hours left.`);
    } else {
        let needHours = hoursForProject - finalHours;

        console.log(`Not enough time!${needHours} hours needed.`);
    }
}

firm(99, 3, 1);