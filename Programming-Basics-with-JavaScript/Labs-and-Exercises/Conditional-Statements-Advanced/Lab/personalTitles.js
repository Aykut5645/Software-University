function personalTitles(arg1, arg2) {
    let age = Number(arg1);
    let sex = arg2;

    if (age < 16) {
        if (sex == "m") {
            console.log("Master");
        } else if (sex == "f") {
            console.log("Miss");
        }
    } else if (age >= 16) {
        if (sex == "m") {
            console.log("Mr.");
        } else if (sex == "f") {
            console.log("Ms.");
        }
    }
}

personalTitles("15", "m");