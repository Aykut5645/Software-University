function oscarsCeremony([arg1]) {
    let rentPrice = Number(arg1);

    let statuettePrice = rentPrice * 0.7;
    let cateringPrice = statuettePrice * 0.85;
    let soundPrice = cateringPrice / 2;

    let totalPrice = rentPrice + statuettePrice + cateringPrice + soundPrice;

    console.log(totalPrice.toFixed(2));
}

oscarsCeremony(["3500"]);