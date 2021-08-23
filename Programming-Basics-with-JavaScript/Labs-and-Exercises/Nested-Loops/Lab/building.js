function building(input) {
    let floorCount = Number(input[0]);
    let inFloorRoomCount = Number(input[1]);

    let currentResult = "";

    for (let i = floorCount; i >= 1; i--) {

        let currentNumber = i;

        if (i == floorCount) {
            currentNumber = "L" + i;
        } else if (i % 2 == 0) {
            currentNumber = "O" + i;
        } else if (i % 2 == 1) {
            currentNumber = "A" + i; 
        }

        currentResult = "";

        for (let j = 0; j < inFloorRoomCount; j++) {
            currentResult += currentNumber + j + " ";
        }

        console.log(currentResult);  
    }
}

building([ '6', '4' ]);