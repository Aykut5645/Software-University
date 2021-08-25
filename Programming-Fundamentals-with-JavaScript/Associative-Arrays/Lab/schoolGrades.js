function schoolGrades(studentsList) {
    let object = {};

    for (const student of studentsList) {
        let studentAsArr = student.split(' ');
        let currentName = studentAsArr.shift();
        let grades = studentAsArr.map(Number);

        if (object[currentName]) {
            let totalGrades = object[currentName].concat(grades);
            object[currentName] = totalGrades;
        } else {
            object[currentName] = grades;
        }
    }

    Object.entries(object)
    .sort((a, b) => average(a[1]) - average(b[1]))
    .forEach(kvp => console.log(`${kvp[0]}: ${kvp[1].join(', ')}`));

    function average(arr) {
        let totalSum = 0;
        for (const grade of arr) {
            totalSum += grade;
        }
        return totalSum / arr.length;
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);