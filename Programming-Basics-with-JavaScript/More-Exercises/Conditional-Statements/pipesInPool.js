function pipesInPool(arg1, arg2, arg3, arg4) {
    let V = Number(arg1);
    let p1 = Number(arg2);
    let p2 = Number(arg3);
    let hours = Number(arg4);

    let litеrP1 = p1 * hours;
    let literP2 = p2 * hours;
    let totalLitres = litеrP1 + literP2;


    let totalLitresPercent = totalLitres / (V / 100);
    let litеrP1Percent = litеrP1 / (totalLitres / 100);
    let literP2Percent = literP2 / (totalLitres / 100);
    
    if (totalLitres > V) {
        let overFlowsL = totalLitres - V; 
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${overFlowsL.toFixed(2)} liters.`);
    } else {
        console.log(`The pool is ${totalLitresPercent.toFixed(2)}% full. Pipe 1: ${litеrP1Percent.toFixed(2)}%. Pipe 2: ${literP2Percent.toFixed(2)}%.`);
    }
}


pipesInPool("1000", "100", "120", "3");