function breakfastRobot() {
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    };

    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    return function manager(input) {
        let commands = {
            restock: (microelement, quantity) => {
                microelements[microelement] += quantity;

                return 'Success';
            },
            prepare: (recipe, quantity) => {
                let currentRecipe = recipes[recipe];

                for (let element in currentRecipe) {
                    if (currentRecipe[element] * quantity > microelements[element]) {
                        return `Error: not enough ${element} in stock`;
                    }
                }

                for (let element in currentRecipe) {
                    microelements[element] -= currentRecipe[element] * quantity;
                }

                return 'Success';

            },
            report: () => {
                return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`
            },
        }

        let [action, argument, quantity] = input.split(' ');
        quantity = Number(quantity);

        return commands[action](argument, quantity);
    }
}

let manager = breakfastRobot();

// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 4"));


console.log(manager('restock protein 100'));
console.log(manager('restock carbohydrate 100'));
console.log(manager('restock fat 100'));
console.log(manager('restock flavour 100'));
console.log(manager('report'));
console.log(manager('prepare eggs 2'));
console.log(manager('report'));
console.log(manager('prepare eggs 1'));
console.log(manager('report'));