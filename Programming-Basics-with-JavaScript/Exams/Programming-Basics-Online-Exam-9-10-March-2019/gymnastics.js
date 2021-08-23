function gymnastics(input) {
    let country = input[0];
    let instrument = input[1];

    let maxGrade = 20;

    let difficult = 0;
    let performance = 0;

    if (country == "Bulgaria") {

        switch (instrument) {
            case "ribbon":
                difficult = 9.600;
                performance = 9.400;
                break;
            case "hoop":
                difficult = 9.550;
                performance = 9.750;
                break;
            case "rope":
                difficult = 9.500;
                performance = 9.400;
                break;
        }   
    } else if (country == "Russia") {

        switch (instrument) {
            case "ribbon":
                difficult = 9.100;
                performance = 9.400;
                break;
            case "hoop":
                difficult = 9.300;
                performance = 9.800;
                break;
            case "rope":
                difficult = 9.60;
                performance = 9.000;
                break;
        }   
    } else if (country == "Italy") {

        switch (instrument) {
            case "ribbon":
                difficult = 9.200;
                performance = 9.500;
                break;
            case "hoop":
                difficult = 9.450;
                performance = 9.350;
                break;
            case "rope":
                difficult = 9.700;
                performance = 9.150;
                break;
        }   
    }

    let gradeSum = difficult + performance;
    let needGrade = Math.abs(maxGrade - gradeSum);

    let percent = (needGrade / maxGrade) * 100;

    console.log(`The team of ${country} get ${gradeSum.toFixed(3)} on ${instrument}.`);
    console.log(`${percent.toFixed(2)}%`);
}

gymnastics([ 'Bulgaria', 'ribbon', '' ]);