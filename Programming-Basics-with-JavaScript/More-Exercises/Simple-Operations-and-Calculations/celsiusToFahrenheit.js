function celsiusToFahrenheit(arg1) {
    let gradus = Number(arg1);
    let Fahrenheit = (gradus * 9/5) + 32;

    console.log(Fahrenheit.toFixed(2));
}

celsiusToFahrenheit("25");