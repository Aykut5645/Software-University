function sortArray(arr, criteria) {
    let obj = { 
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,  
    };
    
    return arr.sort(obj[criteria]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));