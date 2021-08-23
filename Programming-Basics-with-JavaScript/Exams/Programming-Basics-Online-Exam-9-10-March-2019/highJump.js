function highJump(input) {
    let index = 0;
    let desiredHeight = Number(input[index]);
    index++;

    let startedHeight = desiredHeight - 30;

    let unsuccessfulCounter = 0;
    let isFailed = false;
    let totalCounter = 0;

    while (desiredHeight >= startedHeight) {

        let currentJump = Number(input[index]);
        index++;

        if (currentJump > startedHeight) {
            totalCounter++;
            unsuccessfulCounter = 0;

            if (startedHeight >= desiredHeight) {
                break;
            }
            startedHeight += 5;
            
        } else if (currentJump <= startedHeight) {
            totalCounter++;
            unsuccessfulCounter++;

            if (unsuccessfulCounter == 3) {
                isFailed = true;
                break;
            }
        }
    }

    if (isFailed) {
        console.log(`Tihomir failed at ${startedHeight}cm after ${totalCounter} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${startedHeight}cm after ${totalCounter} jumps.`);
    }
}

highJump([
    '250', '225', '224',
    '225', '228', '231',
    '235', '234', '235',
    ''
  ]);