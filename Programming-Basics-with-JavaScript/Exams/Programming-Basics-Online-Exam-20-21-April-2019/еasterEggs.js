function easterEggs(input) {
    let index = 0;
    let paintCountEggs = Number(input[index]);
    index++;

    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;

    let maxCountEggs = 0;
    let maxColorEggs = "";

    for (let i = paintCountEggs; i >= 1; i--) {
        let currentColor = input[index];
        index++;

        switch (currentColor) {
            case "red":
                redCount++;
                break;
            case "orange":
                orangeCount++;
                break;
            case "blue":
                blueCount++;
                break;
            case "green":
                greenCount++;
                break;
        }   
    }

     maxCountEggs = Math.max(redCount, orangeCount, blueCount, greenCount);
     
     if (maxCountEggs == redCount) {
        maxColorEggs = "red";
     } else if (maxCountEggs == orangeCount) {
        maxColorEggs = "orange";
     } else if (maxCountEggs == blueCount) {
         maxColorEggs = "blue";
     } else if (maxCountEggs == greenCount) {
         maxColorEggs = "green";
     }

    console.log(`Red eggs: ${redCount}`);
    console.log(`Orange eggs: ${orangeCount}`);
    console.log(`Blue eggs: ${blueCount}`);
    console.log(`Green eggs: ${greenCount}`);
    console.log(`Max eggs: ${maxCountEggs} -> ${maxColorEggs}`);
}

easterEggs([ '4', 'blue', 'red', 'blue', 'orange', '', '' ]);