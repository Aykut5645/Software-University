function buildWall(arr) {
    let initialHeight = arr.map(Number);
    let currentConcrete = [];
    let totalConcrete = 0;

    while (Math.min(...initialHeight) < 30) {
        let filteredArr = initialHeight.filter(x => x < 30);
        initialHeight = filteredArr;
        
        currentConcrete.push(initialHeight.length * 195);
        totalConcrete += initialHeight.length * 195;

        let mappedArr = initialHeight.map(v => v + 1);
        initialHeight = mappedArr;
    }

    console.log(currentConcrete.join(', '));
    console.log(`${totalConcrete * 1900} pesos`);
}

//buildWall(['21', '25', '28']);
//buildWall(['17']);
buildWall(['17', '22', '17', '19', '17']);