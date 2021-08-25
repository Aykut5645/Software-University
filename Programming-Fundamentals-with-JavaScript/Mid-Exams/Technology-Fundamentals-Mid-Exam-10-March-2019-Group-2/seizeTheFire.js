function seizeTheFire(arr) {
    //let totalWater = Number(arr.pop());
    //let firesCells = arr.shift().split('#');
    let firesCells = arr[0].split('#');
    let totalWater = Number(arr[1]);
    let readyCells = [];
    let totalEffort = 0;
    let totalFire = 0;

    for (let i = 0; i < firesCells.length; i++) {
        let currentCell = firesCells[i].split(' = ');
        let typeOfFire = currentCell[0];
        let valueOfCell = Number(currentCell[1]);

        if (totalWater < valueOfCell) {
            continue;
        }

        if (typeOfFire == 'Low' && (valueOfCell >= 1 && valueOfCell <= 50)) {
            totalWater -= valueOfCell;
            readyCells.push(valueOfCell);
            totalEffort += valueOfCell * 0.25;
            totalFire += valueOfCell;
        } else if (typeOfFire == 'Medium' && (valueOfCell >= 51 && valueOfCell <= 80)) {
            totalWater -= valueOfCell;
            readyCells.push(valueOfCell);
            totalEffort += valueOfCell * 0.25;
            totalFire += valueOfCell;
        } else if (typeOfFire == 'High' && (valueOfCell >= 81 && valueOfCell <= 125)) {
            totalWater -= valueOfCell;
            readyCells.push(valueOfCell);
            totalEffort += valueOfCell * 0.25;
            totalFire += valueOfCell;
        }
    
        if (totalWater <= 0) {
            break;
        }
    }

    console.log('Cells:');
    for (const element of readyCells) {
        console.log(`- ${element}`);
    }
    console.log(`Effort: ${totalEffort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);
}

//seizeTheFire(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']);
seizeTheFire(['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77', '220']);