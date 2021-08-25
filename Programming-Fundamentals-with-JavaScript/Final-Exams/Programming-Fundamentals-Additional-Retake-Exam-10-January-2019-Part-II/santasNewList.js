function santasNewList(input) {
    let command;
    let childrens = {};
    let presents = {};

    while ((command = input.shift()) != 'END') {
        let [childName, typeOfToy, amount] = command.split('->');
        amount = Number(amount);

        if (childName == 'Remove') {
            delete childrens[typeOfToy];
            continue;
        }

        if (!childrens.hasOwnProperty(childName)) {
            childrens[childName] = amount;
        } else if (childrens.hasOwnProperty(childName)) {
            childrens[childName] += amount;
        }

        if (!presents.hasOwnProperty(typeOfToy)) {
            presents[typeOfToy] = amount;
        } else if (presents.hasOwnProperty(typeOfToy)) {
            presents[typeOfToy] += amount;
        }
    }

    console.log('Children:');
    Object.entries(childrens).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(kvp => {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    });
    
    console.log('Presents:');
    Object.keys(presents).forEach(key => {
        console.log(`${key} -> ${presents[key]}`);
    })
}

santasNewList(['Sammy->Candy->12', 'Annie->Candy->12', 'Dannie->Candy->12', 'END']);

santasNewList([
    'Marty->Toys->5',
    'Sam->Candy->20',
    'Leo->Candy->10',
    'Leo->Toys->1',
    'Katy->Clothes->4',
    'Bobbie->Clothes->6',
    'Tanya->Phone->1',
    'Nasko->Tablet->3',
    'END']);
    
santasNewList([
    'Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END'
]);
