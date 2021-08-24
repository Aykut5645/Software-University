function changeTiles([arg1, arg2, arg3, arg4, arg5]) {
    let lenghtSideLanding = Number(arg1);
    let widthTile = Number(arg2);
    let lenghtTile = Number(arg3);
    let widthBench = Number(arg4);
    let lenghtBench = Number(arg5);
    
    let timePutOneTile = 0.2;

    let totalLandingArea = lenghtSideLanding * lenghtSideLanding;
    let benchArea = widthBench * lenghtBench;
    let tileArea = widthTile * lenghtTile;

    let needLandingArea = totalLandingArea - benchArea;

    let needTiles = needLandingArea / tileArea;
    let needTime = needTiles * timePutOneTile;

    console.log(Math.round(needTiles * 100) / 100);
    console.log(Math.round(needTime * 100) / 100);
}

changeTiles([40, 0.8, 0.6, 3, 5]);