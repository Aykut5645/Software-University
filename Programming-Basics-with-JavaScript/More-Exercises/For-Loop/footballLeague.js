function solve(input) {
    let capacity = Number(input[0]);
    let sectorCount = Number(input[1]);

    let A = 0;
    let B = 0;
    let V = 0;
    let G = 0;

    for (let i = 2; i <= sectorCount + 1; i++) {
        let currentSector = input[i];

        switch (currentSector) {
            case "A":
                A++;
                break;
            case "B":
                B++;
                break;
            case "V":
                V++;
                break;
            case "G":
                G++;
                break;
        }
    }
    
    let percentA = (A / sectorCount) * 100;
    let percentB = (B / sectorCount) * 100;
    let percentV = (V / sectorCount) * 100;
    let percentG =(G / sectorCount) * 100;

    let totalSectorPercent = (sectorCount / capacity) * 100;

    console.log(`${percentA.toFixed(2)}%`);
    console.log(`${percentB.toFixed(2)}%`);
    console.log(`${percentV.toFixed(2)}%`);
    console.log(`${percentG.toFixed(2)}%`);
    console.log(`${totalSectorPercent.toFixed(2)}%`);
}

solve([
    '93', '16', 'A', 'V', 'G',
    'G',  'B',  'B', 'G', 'B',
    'A',  'B',  'B', 'B', 'A',
    'B',  'B',  'A'
  ]);