function trapezoidArea([arg1, arg2, arg3]) {
    let firstSide = Number(arg1);
    let secondSide = Number(arg2);
    let height = Number(arg3);

    let area = (firstSide + secondSide) * height / 2;

    console.log(`Trapezoid area = ${area}`);
}

trapezoidArea([8, 13, 7]);