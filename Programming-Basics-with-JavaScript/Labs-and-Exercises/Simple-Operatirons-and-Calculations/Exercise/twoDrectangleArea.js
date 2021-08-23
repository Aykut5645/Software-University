function twoDrectangleArea(arg1, arg2, arg3, arg4) {
    let numberX1 = Number(arg1);
    let numberY1 = Number(arg2);
    let numberX2 = Number(arg3);
    let numberY2 = Number(arg4);

    let lenght = Math.abs(numberX1 - numberX2);
    let widht = Math.abs(numberY1 - numberY2);

    let area = lenght * widht;
    let perimeter = 2 * (lenght + widht);

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

twoDrectangleArea("60", "20", "10", "50");