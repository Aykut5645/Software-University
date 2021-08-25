function solve(input1, input2) {
    let dayType = input1;
    let age = input2;
    let price = 0;

    if (age >= 0 && age <= 18) {
        switch (dayType) {
            case 'Weekday':
                price = 12;
                break;
            case 'Weekend':
                price = 15;
                break;
            case 'Holiday':
                price = 5;
                break;
        }
    } else if (age > 18 && age <= 64) {
        switch (dayType) {
            case 'Weekday':
                price = 18;
                break;
            case 'Weekend':
                price = 20;
                break;
            case 'Holiday':
                price = 12;
                break;
        }
    } else if (age > 64 && age <= 122) {
        switch (dayType) {
            case 'Weekday':
                price = 12;
                break;
            case 'Weekend':
                price = 15;
                break;
            case 'Holiday':
                price = 10;
                break;
        }
    } else {
        price = 'Error!';
    }

    if (price == 'Error!') {
        console.log(price);
    } else {
        console.log(price + '$');
    }       
}

solve('Weekday', 0);