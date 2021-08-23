function transportPrice(arg1, arg2) {
    let distanceKm = Number(arg1);
    let when = (arg2);

    let taxiDayPrice = 0.70 + (distanceKm * 0.79);
    let taxiNightPrice = 0.70 + (distanceKm * 0.90);
    let busPrice = distanceKm * 0.09;
    let trainPrice = distanceKm * 0.06;

    if (distanceKm < 20 && when == "day") {

        console.log(taxiDayPrice.toFixed(2));
    } else if (distanceKm < 20 && when == "night") {

        console.log(taxiNightPrice.toFixed(2));
    } else if (distanceKm >= 20 && distanceKm < 100) {

        console.log(busPrice.toFixed(2));
    } else if (distanceKm >= 100) {

        console.log(trainPrice.toFixed(2));
    }
}

transportPrice("5", "night");