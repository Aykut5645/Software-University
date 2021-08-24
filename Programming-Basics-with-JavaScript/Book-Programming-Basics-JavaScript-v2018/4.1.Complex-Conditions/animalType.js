function animalType(input) {
    let animal = input[0];

    switch (animal) {
        case "dog": 
            animal = "mammal"; 
            break;
        case "crocodile": 
        case "tortoise": 
        case "snake": 
            animal = "reptile"; 
            break;
        default: 
            animal = "unknown";
    }
    
    console.log(animal);
}

animalType(["tortoise"]);