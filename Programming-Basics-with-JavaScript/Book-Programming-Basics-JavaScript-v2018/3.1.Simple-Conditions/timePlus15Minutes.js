function timePlus15Minutes([arg1, arg2]) {
    let startHour = Number(arg1);
    let startMinute = Number(arg2);

    let allMinutes = startHour * 60 + startMinute + 15;
    let hour = Math.trunc(allMinutes / 60);
    let minute = allMinutes % 60;

    if (hour > 23) {
        hour = 00;
    } 

    if (minute < 10) {
        minute = `0${minute}`;
    }

    console.log(`${hour}:${minute}`);
}


timePlus15Minutes(["1", "46"]);