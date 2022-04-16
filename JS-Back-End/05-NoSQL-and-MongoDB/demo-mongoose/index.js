const { connect } = require('mongoose');

const Person = require('./models/Person');
const Cat = require('./models/Cat');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

(async () => {
    await connect('mongodb://localhost:27017/testdb');
    console.log('Database connected...');

    // working with people-db
    await Promise.all([
        new Person({
            firstName: 'Brad',
            lastName: 'Pitt',
            age: 22
        }).save(),
        new Person({
            firstName: 'Peter',
            lastName: 'Jackson',
            age: 25
        }).save()
    ]);

    const people = await Person.find({});
    people.forEach(p => p.getInfo());
    people.forEach(p => p.fullName);

    // working with cat-db
    await new Cat({
        name: 'navcho',
        color: 'orange'
    }).save();

    // finding
    await Cat.find({});
    await Cat.find({ age: { $gte: 20 } }); // gte = greater than or equal
    await Cat.findById('625075b3cab3550b908551d2');

    // this will work inspite of we set enum validator
    await Cat.updateOne({ name: 'Tom' }, { $set: { color: 'red' } });

    // this will not work because we set validations
    const currentCat = await Cat.findOne({ name: 'Tom' });
    currentCat.color = 'red';
    await currentCat.save();

    Cat.findByIdAndRemove('57fb9fe1853ab747b0f692d1');
    Cat.remove({ name: 'Tom' });
    Cat
        .countDocuments()
        .then(console.log);
    Cat
        .countDocuments({ age: { $gt: 19 } })
        .then(console.log);
    // see all the other functions in mongoose documentation...

    // queries
    Person.find({}).sort({ age: -1 });
    Person.find({}).sort({ age: -1 }).skip(10).limit(10);
    Student.find({})
        .where('firstName').equals('Brad')
        .where('age').gt(18).lt(65)
        .sort({ age: -1 })
        .skip(10)
        .limit(10);
    // see all the queries in mongoose documentation...

    // working with post-db and comments-db
    // const person = await Person.findOne({});
    const post = await Post
        .findOne({})
        .populate('author')
        .populate('comments');

    const comment = new Comment({
        author: post.author,
        content: 'First Comment',
    });
    await comment.save();
    post.comments.push(comment);
    await post.save();
    // const post = new Post({
    //     title: 'New Post',
    //     author: person,
    //     content: 'This is post content'
    // });
    // await post.save();
    console.log(post);
})()
    .catch(err => {
        console.error(err.message)
        console.log('THE END!!!');
    });