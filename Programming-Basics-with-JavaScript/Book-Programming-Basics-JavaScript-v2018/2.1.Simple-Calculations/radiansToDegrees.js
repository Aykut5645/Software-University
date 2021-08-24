function radiansToDegrees([arg1]) {
    let radian = Number(arg1); 

    let degree = radian * 180 / Math.PI;

    console.log(Math.round(degree));
}

radiansToDegrees([3.1416]);
