function circleAreaAndPerimeter([arg1]) {
    let radius = Number(arg1);

    let area = Math.PI * radius * radius;
    let perimeter = 2 * Math.PI * radius;

    console.log(area);
    console.log(perimeter);
}

circleAreaAndPerimeter(["3"]);