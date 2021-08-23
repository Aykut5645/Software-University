function projectCreation(arg1, arg2, arg3) {
    let name = arg1;
    let projectsNumber = Number(arg2);
    let totalHours = projectsNumber * 3;
    
    let sentence = `The architect ${name} will need ${totalHours} hours to complete ${projectsNumber} project/s.`;
    console.log(sentence);
}

projectCreation("George", "4");