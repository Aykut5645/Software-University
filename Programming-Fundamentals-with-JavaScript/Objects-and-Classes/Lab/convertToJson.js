function convertToJson(firstName, lastName, hairColor) {
    let personInfo = {};

    personInfo.name = firstName;
    personInfo.lastName = lastName;
    personInfo.hairColor = hairColor;

    let personInfoJson = JSON.stringify(personInfo);
    
    console.log(personInfoJson);
}

convertToJson('George', 'Jones', 'Brown');