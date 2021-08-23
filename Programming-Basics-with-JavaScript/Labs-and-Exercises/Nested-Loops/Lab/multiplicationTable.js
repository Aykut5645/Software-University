function multiplticationTable() {

    for (let i = 1; i < 11; i++) {

        for (let j = 1; j < 11; j++) {
            let result = i * j;
            console.log(`${i} * ${j} = ${result}`);
        }
    }
}

multiplticationTable();
