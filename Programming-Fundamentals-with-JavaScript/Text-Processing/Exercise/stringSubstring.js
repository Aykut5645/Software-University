function stringSubstring(key, text) {
    key = key.toLowerCase();
    text = text.toLowerCase();

    let result = text.split(' ').find(word => word == key );

    if (result != undefined) {
        console.log(key);
    } else {
        console.log(`${key} not found!`);
    }
}

/*
stringSubstring('javascript',
    'JavaScript is the best programming language');
*/
stringSubstring('python',
    'JavaScript is the best programming language');