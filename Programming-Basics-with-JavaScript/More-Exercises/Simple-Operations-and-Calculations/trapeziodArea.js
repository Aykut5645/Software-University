function trapeziodArea(arg1, arg2, arg3) {
    let sideA = Number(arg1);
    let sideB = Number(arg2);
    let height = Number(arg3);

    let area = (sideA + sideB) * height / 2;

    console.log(area.toFixed(2));
}

trapeziodArea("8", "13", "7");