function movieDay([arg1, arg2, arg3]) {
    let timeForPictures = Number(arg1);
    let sceneCount = Number(arg2);
    let OneSceneTime = Number(arg3);

    let preparationTime = timeForPictures * 0.15;
    let scenesTime = sceneCount * OneSceneTime;

    let myTime = preparationTime + scenesTime;

    if (myTime >= timeForPictures) {
        leftTime = Math.round(myTime - timeForPictures);

        console.log(`Time is up! To complete the movie you need ${leftTime} minutes.`);
    } else {
        needTime = Math.round(timeForPictures - myTime);

        console.log(`You managed to finish the movie on time! You have ${needTime} minutes left!`);
    }
}

movieDay(["60", "15", "3"]);