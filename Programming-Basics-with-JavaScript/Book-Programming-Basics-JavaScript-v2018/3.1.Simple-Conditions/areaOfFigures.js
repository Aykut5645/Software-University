function areaOfigures([arg1, arg2, arg3]) {
    let figure = arg1;
    let sideA = Number(arg2);
    let sideB = Number(arg3);
    
    if (figure == "square") {
        let area = sideA * sideA;

        console.log(area.toFixed(3));
    } else if (figure == "rectangle") {
        let area = sideA * sideB;   

        console.log(area.toFixed(3));
    } else if (figure == "circle") {
        let radius = sideA;
        let area = Math.PI * (radius * radius);

        console.log(area.toFixed(3));
   } else if (figure == "triangle") {
       let height = sideB;
       let area = 1/2 * sideA * height;

       console.log(area.toFixed(3));
   }
} 

areaOfigures(["rectangle", "7", "2.5"]);