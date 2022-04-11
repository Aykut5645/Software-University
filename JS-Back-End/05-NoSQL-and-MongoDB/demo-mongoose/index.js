const { connect } = require('mongoose');

const Person = require('./models/Person');
const Cat = require('./models/Cat');

(async () => {
    await connect('mongodb://localhost:27017/testdb');
    console.log('Database connected...');
    
    // working with people-db
    await Promise.all([
        new Person({
            firstName: 'Brad Pitt',
            lastName: 'Saka',
            age: 22
        }).save(),
        new Person({
            firstName: 'Peter',
            lastName: 'Jackson',
            age: 25
        }).save()
    ]);

    let people = await Person.find({});
    people.forEach(p => p.getInfo());
    people.forEach(p => p.fullName);
    

    // working with cat-db
    const newCat = new Cat({
        name: 'navcho',
        color: 'orange'
    });
    await newCat.save();

    const cats = await Cat.find({});
    console.log(cats);
})().catch(err => {
    console.error(err.message)
    console.log('THE END!!!');
});