function storage(products) {
    let storage = new Map();

    for (const product of products) {
        let currentProduct = product.split(' ');
        let [item, quantity] = currentProduct;
        quantity = Number(quantity);

        if (!storage.has(item)) {
            storage.set(item, quantity);
        } else {
            let needQuantity = storage.get(item);
            needQuantity += quantity;
            storage.set(item, needQuantity);
        }
    }

    let iterable = Array.from(storage.entries());

    for (const entrie of iterable) {
        let item = entrie[0];
        let quantity = entrie[1];
        console.log(`${item} -> ${quantity}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);