function listProcessor(inputArr) {
    let outputArr = [];
    let obj = { add, remove, print };
    
    inputArr.forEach(command => {
        let [action, word] = command.split(' ');
        
        obj[action](word);
    });
    
    function add(word) {
        outputArr.push(word);
    }

    function remove(word) {
        outputArr = outputArr.filter(x => x != word);
    }

    function print() {
        console.log(outputArr.join(','));
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);