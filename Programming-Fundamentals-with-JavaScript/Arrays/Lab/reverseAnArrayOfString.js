function solve(input) {
    let arr = input;

    for (let i = 0; i < arr.length / 2; i++) {
        let firstIndex = arr[i];
        let lastIndex = arr[arr.length - 1 - i];
        arr[i] = lastIndex;
        arr[arr.length - 1 - i] = firstIndex;
    }
    
    console.log(arr.join(' '));
}

solve(['33', '120', 'dd']);


function solve(input) {
    let arr = input;
    let newArr = '';
    
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr += arr[i] + ' ';
    }

    console.log(newArr);
}

solve(['abc', 'def', 'hig', 'klm', 'nop']);



function swapElements(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, arr.length - 1 - i);
    }
    console.log(arr.join(' '));

    function swap(elements, i, j) {
        let temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
    }
}

swapElements(['abc', 'def', 'hig', 'klm', 'nop']);
