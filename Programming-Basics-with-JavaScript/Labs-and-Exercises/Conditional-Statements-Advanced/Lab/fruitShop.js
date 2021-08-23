function fruitShop(arg1, arg2, arg3) {
    let fruitType = arg1;
    let dayType = arg2;
    let weight = Number(arg3);

    if (dayType == "Monday" || dayType == "Tuesday" || dayType == "Wednesday" || dayType == "Thursday" || dayType == "Friday") {

        switch (fruitType) {
            case "banana":
                console.log((weight * 2.50).toFixed(2));
                break;
            case "apple":
                console.log((weight * 1.20).toFixed(2));
                break;
            case "orange":
                console.log((weight * 0.85).toFixed(2));
                break;
            case "grapefruit":
                console.log((weight * 1.45).toFixed(2));
                break;
            case "kiwi":
                console.log((weight * 2.70).toFixed(2));
                break;
            case "pineapple":
                console.log((weight * 5.50).toFixed(2));
                break;
            case "grapes":
                console.log((weight * 3.85).toFixed(2));
                break;
            default:
                console.log("error");
        }
    } else if (dayType == "Saturday" || dayType == "Sunday") {

        switch (fruitType) {
            case "banana":
                console.log((weight * 2.70).toFixed(2));
                break;
            case "apple":
                console.log((weight * 1.25).toFixed(2));
                break;
            case "orange":
                console.log((weight * 0.90).toFixed(2));
                break;
            case "grapefruit":
                console.log((weight * 1.60).toFixed(2));
                break;
            case "kiwi":
                console.log((weight * 3.00).toFixed(2));
                break;
            case "pineapple":
                console.log((weight * 5.60).toFixed(2));
                break;
            case "grapes":
                console.log((weight * 4.20).toFixed(2));
                break;
            default:
                console.log("error");
        }
    } else {
        console.log("error");
    }
}

fruitShop("apple", "Tuesday", 2);