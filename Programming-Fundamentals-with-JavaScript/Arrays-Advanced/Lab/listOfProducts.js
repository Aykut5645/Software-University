// дава само 80/100 - не знам :(
function solve(arr) { 
    let currentNum = 1;

    arr.sort((firstName, secondName) => firstName.localeCompare(secondName));

    for (let element of arr) {
        let result = `${currentNum}.${element}`;
        currentNum++;

        console.log(result);
    }
}

solve(["Potatoes", 'Idass', 'tomsa', 'arsaj', 'Waww', 'Idas']);