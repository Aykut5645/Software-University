function phoneBook(arr) {
    let phones = {};

    arr.forEach(element => {
        let currentPerson = element.split(' ');
        let name = currentPerson[0];
        let phone = currentPerson[1];

        phones[name] = phone;
    });
    
    Object.entries(phones).forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });

    /*
    Object.keys(phones).forEach(element => {
        console.log(`${element} -> ${phones[element]}`);
    });
    */

    //for (const entrie of entries) {
    //    let name = entrie[0];
    //    let phone = entrie[1];
//
    //    console.log(`${name} -> ${phone}`);
    //}
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);