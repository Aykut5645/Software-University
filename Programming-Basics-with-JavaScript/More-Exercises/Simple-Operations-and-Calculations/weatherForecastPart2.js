function weatherForecastPart2(arg) {
    let weather = Number(arg);

    if (weather < 5.00 ) {
        weather = "unknown";
    } else if (weather <= 11.9) {
        weather = "Cold";
    } else if (weather <= 14.9) {
        weather = "Cool";
    } else if (weather <= 20.00) {
        weather = "Mild";
    } else if (weather <= 25.90) {
        weather = "Warm";
    } else if (weather <= 35.00) {
        weather = "Hot";
    } else {
        weather = "unknown";
    }

    console.log(weather);
}

weatherForecastPart2("15.00");