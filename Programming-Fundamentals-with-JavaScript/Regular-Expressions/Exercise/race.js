function race(input) {
    let participants = input[0].split(', ');
    let commands = input.slice(1);
    let obj = {};

    let namePattern = /[A-Za-z]+/g;
    let numbersPattern = /\d/g;

    for (const command of commands) {
        if (command == 'end of race') {
            break;
        }
        let name = command.match(namePattern).join('');
        let numbers = command.match(numbersPattern).map(Number);

        if (participants.includes(name) && !obj.hasOwnProperty(name)) {
            obj[name] = sum(numbers);
        } else if (obj.hasOwnProperty(name)) {
            obj[name] += sum(numbers);
        }
    }

    let keys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    console.log(`1st place: ${keys[0]}`);
    console.log(`2nd place: ${keys[1]}`);
    console.log(`3rd place: ${keys[2]}`);

    function sum(arr) {
        let sum = 0;
        for (const num of arr) {
            sum += num;
        }
        return sum;
    }
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);