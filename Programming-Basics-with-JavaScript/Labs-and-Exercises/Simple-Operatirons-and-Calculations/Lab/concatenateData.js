function concatenateData(arg1, arg2, arg3, arg4) {
    let firstName = arg1;
    let lastName = arg2;
    let age = Number(arg3);
    let town = arg4;

    let sentence = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
    
    console.log(sentence);
}

concatenateData("Maria", "Ivanova", "20", "Sofia");