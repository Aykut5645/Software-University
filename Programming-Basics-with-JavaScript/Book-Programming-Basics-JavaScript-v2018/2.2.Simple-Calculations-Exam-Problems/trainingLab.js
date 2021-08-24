function trainingLab([arg1, arg2]) {
    let lenght = Number(arg1) * 100;
    let width = Number(arg2) * 100;

    let lenghtEdCounts = Math.trunc(lenght / 120);
    let widthEdCounts =  Math.trunc((width - 100) / 70);

    let placeCounts = lenghtEdCounts * widthEdCounts - 3;
    
    console.log(placeCounts);
}

trainingLab([8.4, 5.2]);