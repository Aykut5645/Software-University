function pointOnRectangleBorder(arg1, arg2, arg3, arg4, arg5, arg6) {
    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);
    let x = Number(arg5);
    let y = Number(arg6);

    let rightBorder = (x == x2) && (y >= y1 && y <= y2);
    let leftBorder = (x == x1) && (y >= y1 && y <= y2);
    let topBorder = (y == y1) && (x >= x1 && x <= x2);
    let bottomBorder = (y == y2) && (x >= x1 && x <= x2);

    if ((rightBorder || leftBorder) || (topBorder || bottomBorder)) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}

pointOnRectangleBorder(
    2,
    -3,
    12,
    3,
    12,
    -1
    );