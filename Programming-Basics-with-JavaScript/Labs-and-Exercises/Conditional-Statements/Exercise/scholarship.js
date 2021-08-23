function scholarship(arg1, arg2, arg3) {
    let income = Number(arg1);
    let averageGrade = Number(arg2);
    let minIncome = Number(arg3);

    let socialScholarship = 0;
    let excellentScholarship = 0;

    if (averageGrade >= 5.50) {
        excellentScholarship = averageGrade * 25;
    }

    if ((averageGrade >= 4.50 && averageGrade < 5.50) && income <= minIncome) {
        socialScholarship = minIncome * 0.35;
    }

    if (socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if (excellentScholarship > socialScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}

scholarship(300.00,
    5.65,
    420.00,
    );