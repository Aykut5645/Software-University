function activationKeys(input) {
    let sentence = input.shift();
    let command;

    while ((command = input.shift()) != 'Generate') {
        let [action, ...params] = command.split('>>>');

        switch (action) {
            case 'Contains': {
                let substr = params[0];
                if (sentence.includes(substr)) {
                    console.log(`${sentence} contains ${substr}`);
                } else {
                    console.log('Substring not found!');
                }
            }    break;
            case 'Flip': {
                let [flipping, startInd, endInd] = params;
                [startInd, endInd] = [Number(startInd), Number(endInd)];

                if (flipping == 'Upper') {
                    sentence = sentence.substring(0, startInd) + sentence.substring(startInd, endInd).toLocaleUpperCase() + sentence.substring(endInd);
                } else {
                    sentence = sentence.substring(0, startInd) + sentence.substring(startInd, endInd).toLocaleLowerCase() + sentence.substring(endInd);
                }
                console.log(sentence);
            }    break;
            case 'Slice': {
                let [startInd, endInd] = params;
                [startInd, endInd] = [Number(startInd), Number(endInd)];
                sentence = sentence.substring(0, startInd) + sentence.substring(endInd);

                console.log(sentence);
            }   break;
        }
    }

    console.log(`Your activation key is: ${sentence}`);
}

activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate']);

activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate']);