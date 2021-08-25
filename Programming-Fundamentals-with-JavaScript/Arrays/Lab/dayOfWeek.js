function solve(input) {
    let dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let index = input;

    if (index >= 1 && index <= 7) {
        console.log(dayOfWeek[index - 1]);
    } else {
        console.log('Invalid day!');
    }
}

solve(7);



function solve(dayAsNum) {
    let dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (isValidDay(dayAsNum)) {
        console.log(dayOfWeek[dayAsNum - 1]);
    } else {
        console.log('Invalid day!');
    }

    function isValidDay(currentNum) {
        if (currentNum > 0 && currentNum < 8) {
            return true;
        } else {
            return false;
        }
    }
}

solve(0);


