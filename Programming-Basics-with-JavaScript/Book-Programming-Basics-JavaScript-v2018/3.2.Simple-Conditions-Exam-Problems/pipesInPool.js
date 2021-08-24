function pipeInPool(input) {
    let [volume, firstPipe, secondPipe, hours] = input[0].split('\n').map(Number);
    //let volume = Number(input[0]);
    //let firstPipe = Number(input[1]);
    //let secondPipe = Number(input[2]);
    //let hours = Number(input[3]);

    firstPipe = firstPipe * hours;
    secondPipe = secondPipe * hours;
    let poolFilled = firstPipe + secondPipe;

    let poolFilledPercent = poolFilled / 10;
    let firstPipePercent = Math.trunc(firstPipe / 6.6);
    let secondPipePercent = Math.trunc(secondPipe / 6.6); 

    if (volume < poolFilled) {
        let overflow = poolFilled - volume;
        console.log(`For ${hours} hours the pool overflows with ${overflow} liters.`);
    } else if (volume >= poolFilled) {
        console.log(`The pool is ${poolFilledPercent}% full. Pipe 1: ${firstPipePercent}%. Pipe 2: ${secondPipePercent}%.`);
    }
}

pipeInPool((['1000', '100', '120', '3']));