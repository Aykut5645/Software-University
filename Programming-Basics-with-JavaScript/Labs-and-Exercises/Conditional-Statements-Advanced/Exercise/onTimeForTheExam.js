function OnTimeForTheExam(arg1, arg2, arg3, arg4) {
    let hourExam = Number(arg1);
    let minuteExam = Number(arg2);
    let hourArrival = Number(arg3);
    let minuteArrival = Number(arg4);

    let allMinutesExam = (hourExam * 60) + minuteExam;
    let allMinutesArrival = (hourArrival * 60) + minuteArrival;

    let difference = Math.abs(allMinutesExam - allMinutesArrival);

    if (allMinutesExam == allMinutesArrival) {
        console.log(`On time`);
    }

    if ((allMinutesExam > allMinutesArrival) && difference <= 30) {

        console.log(`On time`);
        console.log(`${difference} minutes before the start`);

    } else if ((allMinutesExam > allMinutesArrival) && difference > 30 && difference < 60) {

        console.log(`Early`);
        console.log(`${difference} minutes before the start`);

    } else if ((allMinutesExam > allMinutesArrival) && difference >= 60) {
        let hour = Math.trunc(difference / 60);
        let minute = difference % 60;
        
        if (minute == 0 || minute < 10) {
            minute = `0${minute}`;
        }
        console.log(`Early`);
        console.log(`${hour}:${minute} hours before the start`);
    }

    if ((allMinutesExam < allMinutesArrival) && difference < 60) {

        console.log(`Late`);
        console.log(`${difference} minutes after the start`);

    } else if ((allMinutesExam < allMinutesArrival) && difference >= 60) {
        let hour = Math.trunc(difference / 60);
        let minute = difference % 60;

        if (minute == 0 || minute < 10) {
            minute = `0${minute}`;
        }
        console.log(`Late`);
        console.log(`${hour}:${minute} hours after the start`)
    }
}

OnTimeForTheExam(11, 30, 12, 29);