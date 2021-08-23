function dayOfWeek (arg) {
    let number = Number(arg)

    switch (number) {
        case 1: 
            number = "Monday";
            break;
        case 2:
            number = "Tuesday";
            break;
        case 3:
            number = "Wednesday";
            break;
        case 4:
            number = "Thursday";
            break;
        case 5:
            number = "Friday";
            break;
        case 6:
            number = "Saturday";
            break;
        case 7:
            number = "Sunday";
            break;
        default:
            number = "Error";
    }
        console.log(number);
}

dayOfWeek("5");