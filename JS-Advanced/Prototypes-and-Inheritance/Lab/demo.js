// >>> creating new keyword
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.speak = function () {
    console.log('Hello! My name is ' + this.name);
};

function createNewKeyword(constructor, ...args) {
    // create a new object (a new instance)
    let currentObject = {};

    // set property
    Object.setPrototypeOf(currentObject, constructor.prototype);

    // call constructor with current context
    constructor.apply(currentObject, args);

    // return the created object
    return currentObject;
}

const firstPerson = createNewKeyword(Person, 'Adam', 1);

// >>> prototype inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.speak = function () {
    console.log('Hello! My name is ' + this.name);
};

function Student(name, age, grades) {
    Person.call(this, name, age); // the equivalent of => super();
    this.grades = grades;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.average = function () {
    console.log(`My name is ${this.name}. My average success is ${
        this.grades.reduce((acc, x) => acc + x, 0) / this.grades.length
    }`);
};

let firstStudent = new Student(
    'John',
    'Johnson',
    [5, 4, 5, 3, 6, 6]
);

firstStudent.speak();
firstStudent.average();

// something else
let numbers = [1, 3, 5, 7, 9];

console.log(
    Array.prototype.join.call(numbers)
);