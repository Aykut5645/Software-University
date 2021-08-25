function personInfo(firstName, lastName, age) {
    let info = {
        firstName: firstName,
    };

    info.lastName = lastName;
    info['age'] = age;

    return info;
}

console.log(personInfo("Peter", "Pan", "20"));

/*function personInfo({firstName, lastName, age}) {
    let info = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };

    for (let key in info) {
        console.log(`${key}: ${info[key]}`);
    }
}

personInfo("Peter", "Pan", "20");
*/
/*
function personInfo(firstName, lastName, age) {
    let info = {
        firstName: firstName,
        age: age,
    };
    
    info.lastName = lastName;
    info['age'] = age;

    let entries = Object.entries(info);

    for (let [keys, values] of entries) {
        console.log(`${keys}: ${values}`);
    }
}

personInfo("Peter", "Pan", "20");*/