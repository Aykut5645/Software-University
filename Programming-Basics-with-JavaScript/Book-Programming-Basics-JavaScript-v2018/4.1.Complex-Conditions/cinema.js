function cinema(input) {
    let projectionType = input[0].toLowerCase();
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let premierePrice = 12.00;
    let normalPrice = 7.50;
    let discount = 5.00;

    premierePrice = premierePrice * rows * columns;
    normalPrice = normalPrice * rows * columns;
    discount = discount * rows * columns;

    switch (projectionType) {
        case "premiere":
            console.log(`${premierePrice.toFixed(2)} leva`);
            break;
        case "normal":
            console.log(`${normalPrice.toFixed(2)} leva`);
            break;
        case "discount":
            console.log(`${discount.toFixed(2)} leva`);
            break;
    }   
}

cinema(["normal", 21, 13]);