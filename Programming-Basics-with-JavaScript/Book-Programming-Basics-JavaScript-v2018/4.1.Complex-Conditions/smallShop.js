function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let price = input[2];

    let result = 0;

    if (product == "coffee") {
        if (town == "Sofia") {
            result = 0.50 * price;
        } else if (town == "Plovdiv") {
            result = 0.40 * price;
        } else if (town == "Varna") {
            result = 0.45 * price;
        }
    } else if (product == "water") {
        if (town == "Sofia") {
            result = 0.80 * price;
        } else if (town == "Plovdiv") {
            result = 0.70 * price;
        } else if (town == "Varna") {
            result = 0.70 * price;
        }
    } else if (product == "beer") {
        if (town == "Sofia") {
            result = 1.20 * price;
        } else if (town == "Plovdiv") {
            result = 1.15 * price;
        } else if (town == "Varna") {
            result = 1.10 * price;
        }
    } else if (product == "sweets") {
        if (town == "Sofia") {
            result = 1.45 * price;
        } else if (town == "Plovdiv") {
            result = 1.30 * price;
        } else if (town == "Varna") {
            result = 1.35 * price;
        }
    } else if (product == "peanuts") {
        if (town == "Sofia") {
            result = 1.60 * price;
        } else if (town == "Plovdiv") {
            result = 1.50 * price;
        } else if (town == "Varna") {
            result = 1.55 * price;
        }
    }
        console.log(result);
} 

smallShop(["peanuts", "Plovdiv", 1]);