const { hash, compare } = require('bcrypt');
const saltRounds = 5;

// callback approach
hash('123456', saltRounds, function (err, hash) {
    if (err) {
        throw new Error(err.message);
    }
    compare('123456', hash, function (err, result) {
        if (err) {
            throw new Error(err.message);
        }
        console.log(result);
    });
});

// promise approach
(async () => {
    try {
        let hashingResult = await hash('123456', saltRounds);
        console.log(
            await compare('123456', hashingResult)
        );
    } catch (err) {
        throw new Error(err.message);
    }
})();