function nXnMatrix(num) {

    for (let i = 0; i < num; i++) {
        let horizontal = [];

        for (let j = 0; j < num; j++) {
            horizontal.push(num); 
        }
        
        console.log(horizontal.join(' '));
    }
}

nXnMatrix(7);