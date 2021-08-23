function circleAreaAndPerimeter(arg) {
    let radius = Number(arg);
    let area = Math.PI * (arg * arg);
    let perimeter = 2 * Math.PI * arg;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleAreaAndPerimeter("3");