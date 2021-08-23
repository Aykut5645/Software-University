function areaOfFigures(arg1, arg2, arg3) {
    let figure = arg1;
    let sideA = Number(arg2);
    let sideB = Number(arg3);

    if (figure == "square") {
        area = sideA * sideA;

        console.log("square");
        console.log(area.toFixed(3));
    } else if (figure == "rectangle") {
        area = sideA * sideB;

        console.log("rectangle");
        console.log(area.toFixed(3));
    } else if (figure == "circle") {
        let radius = sideA;
        area = Math.PI * (radius * radius);

        console.log("circle");
        console.log(area.toFixed(3));
    } else if (figure == "triangle") {
        let height = sideB;
        area = 1/2 * (sideA * height);

        console.log("triangle");
        console.log(area.toFixed(3));
    }
}

areaOfFigures("circle", "6", "20");