function weatherForecast(arg) {
    let weather = arg;

    if (weather == "sunny") {
        weather = "It's warm outside!";
    } else if (weather == "cloudy") {
        weather = "It's cold outside!";
    } else {
        weather = "It's cold outside!";
    }

    console.log(weather);
}

weatherForecast("sunny");