function foo(arr) {
    let newArr = [];
    
    arr.forEach(n => n < 0
        ? newArr.unshift(n)
        : newArr.push(n)
    );

    return newArr;
}

console.log(
    foo([7, -2, 8, 9])
);