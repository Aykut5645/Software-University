function tradeComission(input) {
    let town = input[0];
    let saleCount = Number(input[1]);

    let comission = 0;

    if (saleCount <= 500) {
        if (town == "Sofia") {
            comission = saleCount * 0.05;
        } else if (town == "Varna") {
            comission = saleCount * 0.045;
        } else if (town == "Plovdiv") {
            comission = saleCount * 0.055;
        }
    } else if (saleCount <= 1000) {
        if (town == "Sofia") {
            comission = saleCount * 0.07;
        } else if (town == "Varna") {
            comission = saleCount * 0.075;
        } else if (town == "Plovdiv") {
            comission = saleCount * 0.08;
        }
    } else if (saleCount <= 10000) {
        if (town == "Sofia") {
            comission = saleCount * 0.08;
        } else if (town == "Varna") {
            comission = saleCount * 0.1;
        } else if (town == "Plovdiv") {
            comission = saleCount * 0.12;
        }
    } else if (saleCount > 10000) {
        if (town == "Sofia") {
            comission = saleCount * 0.12;
        } else if (town == "Varna") {
            comission = saleCount * 0.13;
        } else if (town == "Plovdiv") {
            comission = saleCount * 0.145;
        }
    } 

    if (!(saleCount > 0 && (town == "Sofia" || town == "Varna" || town == "Plovdiv"))) {
        console.log("error");
    } else {
        console.log(comission.toFixed(2));
    }
}

tradeComission(["Plovdivv", 55]);