function yardGreening(arg1) {
    let metresForGreening = Number(arg1);
    oneMetrDDSlv = 7.61;
    let allDvor = metresForGreening * oneMetrDDSlv;

    let discount = 0.18 * allDvor;
    let finalResult = allDvor - discount;
    
    console.log(`The final price is: ${finalResult.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

yardGreening("135");