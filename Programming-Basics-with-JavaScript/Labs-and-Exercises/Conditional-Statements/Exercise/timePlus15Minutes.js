function timePlus15Minutes(arg1, arg2) {
    let strartHours = Number(arg1);
    let startminutes = Number(arg2);

    let hoursMinutesFifteenMin = strartHours * 60 + startminutes + 15;

    let finalHours = Math.floor(hoursMinutesFifteenMin / 60);
    let finalMinutes = hoursMinutesFifteenMin % 60;

    if (finalHours > 23) {
        finalHours = 0;
    }

    if (finalMinutes < 10) {
        console.log(`${finalHours}:0${finalMinutes}`);
    } else {
        console.log(`${finalHours}:${finalMinutes}`);
    }
}

timePlus15Minutes("0", "46");