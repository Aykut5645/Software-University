function solve(input) {
    let studentsCount = Number(input[0]);

   let topCount = 0;
   let veryGoodCount = 0;
   let goodCount = 0;
   let failCount = 0;

   let gradeSum = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let currentGrade = Number(input[i]);

        if (currentGrade >= 5.00) {
            topCount++;
        } else if (currentGrade >= 4.00 && currentGrade < 5.00) {
            veryGoodCount++;
        } else if (currentGrade >= 3.00 && currentGrade < 4.00) {
            goodCount++;
        } else if (currentGrade < 3.00) {
            failCount++;
        }

        gradeSum += currentGrade;
    }

    let topPercent = (topCount / studentsCount) * 100;
    let veryGoodPercent = (veryGoodCount / studentsCount) * 100;
    let goodPercent = (goodCount / studentsCount) * 100;
    let failPercent = (failCount / studentsCount) * 100;

    let averageSuccess = gradeSum / studentsCount;

    console.log(`Top students: ${topPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${veryGoodPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${goodPercent.toFixed(2)}%`);
    console.log(`Fail: ${failPercent.toFixed(2)}%`);
    console.log(`Average: ${averageSuccess.toFixed(2)}`);
}

solve([
    '10',   '3',    '2.99',
    '5.68', '3.01', '4',
    '4',    '6',    '4.5',
    '2.44', '5',    ''
  ]);