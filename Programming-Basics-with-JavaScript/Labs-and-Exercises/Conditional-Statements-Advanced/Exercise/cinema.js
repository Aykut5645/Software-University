function cinema(arg1, arg2, arg3) {
    let projectionType = arg1;
    let rows = Number(arg2);
    let columns = Number(arg3);

    let premierePrice = 12.00;
    let normalPrice = 7.50;
    let discountPrice = 5.00;

    let result = 0;

    if (projectionType == "Premiere") {
        result = premierePrice * rows * columns;
    } else if (projectionType == "Normal") {
        result = normalPrice * rows * columns;
    } else if (projectionType == "Discount") {
        result = discountPrice * rows * columns;
    }

    console.log(`${result.toFixed(2)} leva`);

}

cinema("Premiere", 10, 12)