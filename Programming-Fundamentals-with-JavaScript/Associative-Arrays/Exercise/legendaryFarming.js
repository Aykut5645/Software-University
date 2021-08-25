function legendaryFarming(input) {
    let inputAsArr = input
        .split(' ')
        .map((v, i) => {
            if (i % 2 == 0) {
                return Number(v);
            } else {
                return v.toLocaleLowerCase();
            }
        });

    let items = { motes: 0, shards: 0, fragments: 0, };
    let junk = {};

    for (let i = 0; i < inputAsArr.length; i += 2) {
        let quantity = inputAsArr[i];
        let item = inputAsArr[i + 1];

        if (item != 'motes' && item != 'shards' && item != 'fragments') {
            if (!junk.hasOwnProperty(item)) {
                junk[item] = quantity;
            } else {
                junk[item] += quantity;
            }
            continue;
        }

        if (!items.hasOwnProperty(item)) {
            items[item] = quantity;
        } else {
            items[item] += quantity;
        }

        if (items[item] >= 250) {
            items[item] = items[item] - 250;
            if (item == 'motes') {
                console.log('Dragonwrath obtained!');
            } else if (item == 'fragments') {
                console.log('Valanyr obtained!')
            } else if (item == 'shards') {
                console.log('Shadowmourne obtained!');
            }
            break;
        }
    }

    Object.keys(items)
        .sort((a, b) => items[b] - items[a] || a.localeCompare(b))
        .forEach(item => {
            console.log(`${item}: ${items[item]}`);
        });

    if (Object.keys(junk).length != 0) {
        Object.keys(junk)
            .sort((a, b) => a.localeCompare(b))
            .forEach(item => {
                console.log(`${item}: ${junk[item]}`);
            });
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');