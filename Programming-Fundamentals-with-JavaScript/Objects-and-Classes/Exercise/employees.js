function employees(names) {
    names.forEach(element => {
        let currentLength = element.length;

        let namesObj = {
            name: element,
            length: currentLength,
        };

        console.log(`Name: ${namesObj.name} -- Personal Number: ${namesObj.length}`);
    });
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);



/*
function employees(names) {
    let namesObj = {};

    names.forEach(element => {
        let currentLength = element.length;

        namesObj[element] = currentLength;
    });

    for (const key in namesObj) {
        console.log(`Name: ${key} -- Personal Number: ${namesObj[key]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
*/

/*
function employees(names) {
    class Employee {
        constructor(name) {
            this.name = name;
            this.number = name.length;
        }

        print() {
            return (`Name: ${this.name} -- Personal Number: ${this.number}`);
        }
    }

    //names.forEach(element => {
    //    let finalResult = new Employee(element);
    //    return finalResult.print();
    //});

    //names = names.map(x => {
    //    let result = new Employee(x);
    //    return result.print();
    //});
    
    //names.map(x => {
    //    let finalResult = new Employee(x);
    //    console.log(finalResult.print());
    //});

    names.map(x => new Employee(x)).forEach(element => {
        console.log(element.print());
    });
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
*/

