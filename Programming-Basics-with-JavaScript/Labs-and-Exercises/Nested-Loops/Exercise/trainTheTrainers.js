function trainTheTrainers(input) {
    let index = 0;
    let trainersCount = Number(input[index]);
    index++;

    let presentation = input[index];
    index++;

    let totalGradeCount = 0;
    let totalGradeSum = 0;

    while (presentation != "Finish") {

        let gradeSum = 0;
        let gradeCount = 0;
        
        while (gradeCount < trainersCount) {
            let currentGrade = Number(input[index]);
            index++;

            gradeSum += currentGrade; 
            totalGradeSum += currentGrade;

            gradeCount++;
            totalGradeCount++;
        }

        let currentAverage = gradeSum / gradeCount;
        console.log(`${presentation} - ${currentAverage.toFixed(2)}.`);

        presentation = input[index];
        index++;

        if (presentation == "Finish") {
            let totalaverage = totalGradeSum / totalGradeCount;
            console.log(`Student's final assessment is ${totalaverage.toFixed(2)}.`);
        }
    }
}

trainTheTrainers([
    '2',
    'Objects and Classes',
    '5.77',
    '4.23',
    'Dictionaries',
    '4.62',
    '5.02',
    'RegEx',
    '2.88',
    '3.42',
    'Finish'
  ]);