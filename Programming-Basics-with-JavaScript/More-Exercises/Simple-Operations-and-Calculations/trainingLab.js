function trainingLab(arg1, arg2) {
    let lenght = Number(arg1) * 100;
    let widht = Number(arg2) * 100;
    
    let placesInLenght = Math.floor(lenght / 120);
    let placesInWidht = Math.floor((widht - 100) / 70);
    let placesInHall = placesInLenght * placesInWidht -3;
    
    console.log(placesInHall);
}   

trainingLab("15", "8.9");