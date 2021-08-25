function nationalCourt(arr) {
    let info = arr.map(Number);
    let firstEmplEff = info.shift();
    let secondEmplEff = info.shift();
    let thirdEmplEff = info.shift();
    let studentCount = info.shift();

    let totalEff = firstEmplEff + secondEmplEff + thirdEmplEff;
    let hours = 0;

    while (studentCount > 0) {
        hours++;

        if (hours % 4 == 0) {
            continue;
        } else {
            studentCount -= totalEff;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

//nationalCourt(['5', '6', '4', '20']);
nationalCourt(['1', '2', '3', '45']);
//nationalCourt(['3', '2', '5', '40']);