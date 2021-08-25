/*function solve(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            newArr.push(arr[i]);
        }
    }

    let calculation = newArr.map(x => x * 2);
    console.log(calculation.reverse().join(' '));
}

solve([10, 15, 20, 25]);
*/


function solve(arr) {
    let filtredArr = arr.filter(numOddPosition);
    console.log(filtredArr);
    
    function numOddPosition(arr) {
    
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 1) {
                return arr[i];
            }
        }
    }
}

solve([10, 15, 20, 25]);

