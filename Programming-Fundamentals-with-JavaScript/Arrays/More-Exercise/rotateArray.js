function rotateArray(arr) {
    let rotations = Number(arr.pop());

    for (let i = 1; i <= rotations; i++) {
        let currentValue = arr.pop();
        arr.unshift(currentValue);
        
    }

    console.log(arr.join(' '));
}

//rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
//rotateArray(['remove', 'remove', 'remove']);