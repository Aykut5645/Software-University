function bonusScoringSystem(arr) {
    let attendances = arr.slice().map(Number);
    let studentCount = attendances.shift();
    let lecturesCount = attendances.shift();
    let initialBonus = attendances.shift();
    
    let max = 0;
    let currentResult = 0;
    let currentAttendances = 0;

    for (let i = 0; i < studentCount; i++) {
        let studentAttendance = attendances[i];
        currentResult = studentAttendance / lecturesCount * (5 + initialBonus);

        if (currentResult > max) {
            max = currentResult;
            currentAttendances = studentAttendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(max)}.`);
    console.log(`The student has attended ${currentAttendances} lectures.`);
}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
);
/*
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
);*/
