function basketballEquipment(input) {
    let yearTax = Number(input[0]);
    
    let sneakers = yearTax * 0.60;
    let еquipment = sneakers * 0.80;
    let ball = еquipment * 1/4;
    let accessories = ball * 1 / 5;

    let totalPrice = yearTax + sneakers + еquipment + ball + accessories;

    console.log(totalPrice.toFixed(2));
}   

basketballEquipment([ '320', '' ]);