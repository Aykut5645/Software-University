function division(input) {
    let num = input;

    let byTwo = 0;
    let byThree = 0;
    let bySix = 0;
    let bySeven = 0;
    let byTen = 0;

    if (num % 2 == 0) {
        byTwo += 1;
    } 

    if (num % 3 == 0) {
        byThree += 2;
    } 
    
    if (num % 6 == 0) {
        bySix += 3;
    }

    if (num % 7 == 0) {
        bySeven += 4;
    } 

    if (num % 10 == 0) {
        byTen += 5;
    }

    let result = Math.max(byTwo, byThree, bySix, bySeven, byTen);
    
    if (result == 1) {
        console.log(`The number is divisible by 2`);
    } else if (result == 2) {
        console.log(`The number is divisible by 3`);
    } else if (result == 3) {
        console.log(`The number is divisible by 6`);
    } else if (result == 4) {
        console.log(`The number is divisible by 7`);
    } else if (result == 5) {
        console.log(`The number is divisible by 10`);
    } else {
        console.log('Not divisible');
    }
}

division(30);