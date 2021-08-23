function triangleArea(arg1, arg2) {
    let sideA = Number(arg1);
    let height = Number(arg2);

    let area = sideA * height / 2;

    console.log(area.toFixed(2));
} 

triangleArea("20", "30");