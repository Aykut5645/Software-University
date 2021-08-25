function addressBook(totalInfo) {
    let finalList = {};
    let entriesArr = [];
    let index = 0;

    for (const person of totalInfo) {
        let personArr = person.split(':');
        
        let [name, address] = personArr;

        finalList[name] = address;
    }

    Object.entries(finalList).forEach(element => {
        entriesArr[index] = `${element[0]} -> ${element[1]}`;
        index++;
    });

    entriesArr.sort((a, b) => a.localeCompare(b));
    console.log(entriesArr.join('\n'));
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);