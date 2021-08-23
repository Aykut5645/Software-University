function housePainting(arg1, arg2, arg3) {
    let heightHouse = Number(arg1);
    let lenghtHouse = Number(arg2);
    let lenghtTriangleRoof = Number(arg3);

    let sideWallArea = heightHouse * lenghtHouse;
    let windowArea = 1.5 * 1.5;
    let twoSideWallArea = (2 * sideWallArea) - (2 * windowArea);

    let backWall = heightHouse * heightHouse;
    let frontWall = heightHouse * heightHouse;
    let doorway = 1.2 * 2;
    let backAndFrontWall = (backWall + frontWall) - doorway;
    let totalAreaWall = twoSideWallArea + backAndFrontWall
    let greenPaint = totalAreaWall / 3.4;
   

    let twoRectangleInRoof = 2 * (heightHouse * lenghtHouse);
    let TriangleInRoof = (heightHouse * lenghtTriangleRoof) / 2;
    let twoTriangleInRoof = TriangleInRoof * 2;
    let totalAreaRoof = twoRectangleInRoof + twoTriangleInRoof;
    let redPaint = totalAreaRoof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting("6", "10", "5.2");