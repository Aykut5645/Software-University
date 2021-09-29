function juiceFlavors(arr) {
    let sortedArr = [];

    let obj = arr.reduce((acc, x) => {
        let [type, qty] = x.split(' => ');
        qty = Number(qty);

        acc[type] ? acc[type] += qty : acc[type] = qty;

        if (acc[type] >= 1000 && !sortedArr.includes(type)) {
            sortedArr.push(type);
        }

        return acc;
    }, {});
    
    sortedArr
        .filter(j => obj[j] >= 1000)
        .forEach(j => {
            console.log(`${j} => ${Math.trunc(obj[j] / 1000)}`);
        });
}