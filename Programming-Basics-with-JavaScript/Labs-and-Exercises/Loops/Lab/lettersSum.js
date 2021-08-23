function lettersSum(arg1, arg2, arg3) {
    let product = arg1;
    let controlNumber = Number(arg2);
    let budget = Number(arg3);

    let indexSum = 0;

    for(let i = 0; i < product.length; i++) {
        let indexValue = product[i];

        switch (indexValue) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "y":
                indexSum += 3;
                break;
            default:
                indexSum += 1;
                break;
        }
    }

    let finalSum = indexSum * controlNumber;;

    let leftSum = Math.abs(finalSum - budget);

    if (budget >= finalSum) {
        console.log(`${product} bought. Money left: ${leftSum.toFixed(2)}`);
    } else {
        console.log(`Cannot buy ${product}. Product value: ${finalSum.toFixed(2)}`);
    }
}   

lettersSum("milk", "1.4", "8");