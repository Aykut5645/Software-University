function suitcasesLoad(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;

    let currentSuitcaseVolume = input[index];
    index++

    let counter = 0;

    while (currentSuitcaseVolume != "End") {
        counter++;
        currentSuitcaseVolume = Number(currentSuitcaseVolume);
        
        if (counter % 3 == 0) {
            currentSuitcaseVolume += currentSuitcaseVolume * 0.1; 
        }

        capacity -= currentSuitcaseVolume;

        if (capacity < 0) {
            counter--;
            break;
        }

        currentSuitcaseVolume = input[index];
        index++
    }

    if (capacity < 0) {
        console.log("No more space!");
        console.log(`Statistic: ${counter} suitcases loaded.`);
    } else {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${counter} suitcases loaded.`);
    }
}

suitcasesLoad([ '700.5', '180', '340.6', '126', '220', '' ]);