function triangleArea([arg1, arg2]) {
    let side = Number(arg1);
    let height = Number(arg2);

    let area = side * height / 2;

    console.log(`Triangle area = ${area}`);
}

triangleArea([20, 30]);