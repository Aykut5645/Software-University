function vegetableMarket([arg1, arg2, arg3, arg4]) {
    let vegetablePrice = Number(arg1);
    let fruitPrice = Number(arg2);
    let vegetableCount = Number(arg3);
    let fruitCount = Number(arg4);

    let vegetables = vegetablePrice * vegetableCount;
    let fruits = fruitPrice * fruitCount;

    let final = (vegetables + fruits) / 1.94;

    console.log(final);
}

vegetableMarket([1.5,
    2.5,
    10,
    10]);