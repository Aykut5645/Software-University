function rectangleArea([arg1, arg2, arg3, arg4]) {
    let xOne = Number(arg1);
    let yOne = Number(arg2);
    let xTwo = Number(arg3);
    let yTwo = Number(arg4);

    let width = Math.max(xOne, xTwo) - Math.min(xOne, xTwo);
    let lenght = Math.max(yOne, yTwo) - Math.min(yOne, yTwo);

    let area = width * lenght;
    let perimeter = 2 * (width + lenght);
    
    console.log(area);
    console.log(perimeter);
}

rectangleArea([60, 20, 10, 50]);