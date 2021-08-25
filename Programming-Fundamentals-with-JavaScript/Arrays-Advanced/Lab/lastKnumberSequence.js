function solve(n, k) {
    let arr = [1];  

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let slicedArr = arr.slice(-k); 

        for (const element of slicedArr) {
            sum += element;
        }   

        arr.push(sum);
    }   
    
    console.log(arr.join(' '));
}

//solve(6, 3);
solve(8, 2);