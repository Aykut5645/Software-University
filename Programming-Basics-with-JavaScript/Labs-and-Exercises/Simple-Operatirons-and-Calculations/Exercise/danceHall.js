function danceHall(arg1, arg2, arg3) {
    let lenghtHall = Number(arg1);
    let wightHall = Number(arg2);
    let wardrobeSide = Number(arg3);

    let sizeHall = (lenghtHall * 100) * (wightHall * 100);
    let wardrobeSize = (wardrobeSide * 100) * (wardrobeSide * 100);
    let benchSize = sizeHall / 10;
    let freeSpace = sizeHall - wardrobeSize - benchSize;

    let countDancers = freeSpace / (40 + 7000);

    console.log(Math.floor(countDancers));
}

danceHall("50", "25", "2");