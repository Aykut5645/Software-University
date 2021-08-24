function fruitShop(input) {
    let fruitType = input[0];
    let dayOfWeek = input[1];
    let weight = input[2];

    let price = 0;

    if (!(dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday" || dayOfWeek == "Friday" || dayOfWeek == "Saturday" || dayOfWeek == "Sunday")) {
        console.log("error");
    } else if (!(fruitType == "banana" || fruitType == "apple" || fruitType == "orange" || fruitType == "grapefruit" || fruitType == "kiwi" || fruitType == "pineapple" || fruitType == "grapes")) {
        console.log("error");
    } 

    if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday" || dayOfWeek == "Friday") {
        if (fruitType == "banana") {
            price = 2.50;
            console.log((price * weight).toFixed(2))
        } else if (fruitType == "apple") {
            price = 1.20;
            console.log((price * weight).toFixed(2));
        } else if (fruitType == "orange") {
            price = 0.85;
            console.log((price * weight).toFixed(2));
        } else if (fruitType == "grapefruit") {
            price = 1.45;
            console.log((price * weight).toFixed(2));
        } else if (fruitType == "kiwi") {
            price = 2.70;
            console.log((price * weight).toFixed(2));
        } else if (fruitType == "pineapple") {
            price = 5.50;
            console.log((price * weight).toFixed(2));
        } else if (fruitType == "grapes") {
            price = 3.85;
            console.log((price * weight).toFixed(2));
        }
    } else if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
        if (fruitType == "banana") {
            price = 2.70;
            console.log((price * weight).toFixed(2))
        } else if (fruitType == "apple") {
            price = 1.25;
            console.log((price * weight).toFixed(2));
        } else if (fruitType == "orange") {
            price = 0.90;
            console.log((price * weight).toFixed(2));
        } else if (fruitType == "grapefruit") {
            price = 1.60;
            console.log((price * weight).toFixed(2));
        } else if (fruitType == "kiwi") {
            price = 3.00;
            console.log((price * weight).toFixed(2));
        } else if (fruitType == "pineapple") {
            price = 5.60;
            console.log((price * weight).toFixed(2));
        } else if (fruitType == "grapes") {
            price = 4.20;
            console.log((price * weight).toFixed(2));
        }
    }
}

fruitShop(["orangee", "Sunday", 3]);