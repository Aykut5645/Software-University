function renovation(input) {
    let index = 0;
    let height = Number(input[index]);
    index++;

    let width = Number(input[index]);
    index++;

    let percentWithoutPaint = Number(input[index]);
    index++;
    percentWithoutPaint = (100 - percentWithoutPaint) / 100;

    let wallCount = 4;

    let area = height * width * wallCount;
    area *= percentWithoutPaint; 

    let litres = input[index];
    index++;
    
    while (litres != "Tired!" && litres != undefined) {

        litres = Number(litres);
        area -= litres;

        litres = input[index];
        index++;
    }
    
    if (area < 0) {
        area = Math.abs(area);
        console.log(`All walls are painted and you have ${area} l paint left!`);
    } else if (area == 0) {
        console.log("All walls are painted! Great job, Pesho!");
    } else {
        console.log(`${area} quadratic m left.`);
    }
}

renovation([ '2', '3', '25', '6', '7', '8' ]);