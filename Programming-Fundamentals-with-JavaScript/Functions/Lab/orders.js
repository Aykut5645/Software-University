function solve(input1, input2) {
    let product = input1;
    let quantity = input2;
    let totalPrice = 0;

    switch (product) {
        case 'water':
            totalPrice = quantity * 1; 
            break;
        case 'coffee':
            totalPrice = quantity * 1.5;
            break;
        case 'coke':
            totalPrice = quantity * 1.4;
            break;
        case 'snacks':
            totalPrice = quantity * 2;
            break;
    }

    console.log(totalPrice.toFixed(2));
}

solve('coffee', 2);