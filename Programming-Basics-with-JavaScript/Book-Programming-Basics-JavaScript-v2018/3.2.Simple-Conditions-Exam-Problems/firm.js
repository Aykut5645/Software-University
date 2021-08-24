function firm(input) {
    let neededHours = Number(input[0]);
    let days = Number(input[1]);
    let workers = Number(input[2]);

    let daysForWork = days *  0.90;
    let hoursForWork = Math.trunc((daysForWork * 8) + (2 * days * workers));

    let leftOrNeedHours = Math.abs(neededHours - hoursForWork);

    if (hoursForWork >= neededHours) {
        console.log(`Yes!${leftOrNeedHours} hours left.`);
    } else {
        console.log(`Not enough time!${leftOrNeedHours} hours needed.`);
    }
}

firm([90, 7, 3])