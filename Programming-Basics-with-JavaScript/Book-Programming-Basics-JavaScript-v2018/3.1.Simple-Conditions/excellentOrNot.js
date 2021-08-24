function excellentOrNot([arg]) {
    let result = parseFloat(arg);

    if (result >= 5.5) {
        result = "Excellent!";
    } else {
        result = "Not Excellent.";
    }

    console.log(result);
}   

excellentOrNot([5]);