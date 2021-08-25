function serializeString([input]) {
    let str = input;
    let newStr = '';

    for (const char of str) {
        if (!newStr.includes(char)) {
            newStr += char;
        }
    }

    for (const char of newStr) {
        let index = str.indexOf(char);
        let indeces = [];

        while (index != -1) {
            indeces.push(index);
            index = str.indexOf(char, index + 1);
        }

        console.log(`${char}:${indeces.join('/')}`);
    }
}

serializeString(['abababa', '']);
serializeString(['avjavamsdmcalsdm', '']);