function softuniReception(arr) {
    let mappedArr = arr.map(Number);
    let firstEmplEffic = mappedArr[0];
    let secondEmplEffic = mappedArr[1];
    let thirdEmplEffic = mappedArr[2];
    let studentsCount = mappedArr[3];

    let hours = 0;
    let anHourEffic = firstEmplEffic + secondEmplEffic + thirdEmplEffic; 

    while (studentsCount > 0) {
        hours++;
        if (hours != 0 && hours % 4 == 0) {
            continue;
        }
        studentsCount -= anHourEffic;
    }

    console.log(`Time needed: ${hours}h.`);
}

//softuniReception(['5', '6', '4', '20']);
//softuniReception(['1', '2', '3', '45']);
softuniReception(['3', '2', '5', '40']);