function solve(input) {
    let grade = input;
    let description = '';

    if (grade < 3.00) {
        grade = 2;
        description = 'Fail';
    } else if (grade < 3.50) {
        description = 'Poor';
    } else if (grade < 4.50) {
        description = 'Good';
    } else if (grade < 5.50) {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }

    if (grade == 2) {
        console.log(`${description} (${grade})`);
    } else {
        console.log(`${description} (${grade.toFixed(2)})`);
    }
}

solve(2.99);