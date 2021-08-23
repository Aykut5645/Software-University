function tradeCommissions(arg1, arg2) {
    let town = arg1;
    let saleCount = Number(arg2);

    let commission = 0;

    if (0 <= saleCount && saleCount <= 500) {

        if (town == "Sofia") {
            commission = saleCount * 0.05;
            console.log(commission.toFixed(2)); 
        } else if (town == "Varna") {
            commission = saleCount * 0.045;
            console.log(commission.toFixed(2));
        } else if (town == "Plovdiv") {
            commission = saleCount * 0.055;
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (500 < saleCount && saleCount <= 1000) {

        if (town == "Sofia") {
            commission = saleCount * 0.07; 
            console.log(commission.toFixed(2));
        } else if (town == "Varna") {
            commission = saleCount * 0.075;
            console.log(commission.toFixed(2));
        } else if (town == "Plovdiv") {
            commission = saleCount * 0.08;
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (1000 < saleCount && saleCount <= 10000) {

        if (town == "Sofia") {
            commission = saleCount * 0.08; 
            console.log(commission.toFixed(2));
        } else if (town == "Varna") {
            commission = saleCount * 0.1;
            console.log(commission.toFixed(2));
        } else if (town == "Plovdiv") {
            commission = saleCount * 0.12;
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (saleCount > 10000) {

        if (town == "Sofia") {
            commission = saleCount * 0.12; 
            console.log(commission.toFixed(2));
        } else if (town == "Varna") {
            commission = saleCount * 0.13;
            console.log(commission.toFixed(2));
        } else if (town == "Plovdiv") {
            commission = saleCount * 0.145;
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}

tradeCommissions("Plovdiv", 499.99);