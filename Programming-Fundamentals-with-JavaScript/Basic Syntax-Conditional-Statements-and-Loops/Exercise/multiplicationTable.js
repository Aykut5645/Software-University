function multiplicationTable(input) {
    let num = input;
    let product = 0;

    for (let i = 1; i <= 10; i++) {
        product = i * num;
        console.log(`${num} X ${i} = ${product}`);
    }
}

multiplicationTable(5);