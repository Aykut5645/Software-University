function convertToObject(strJson) {
    let personInfo = JSON.parse(strJson);
    let entries = Object.entries(personInfo);

    for (const prop of entries) {
        let currentKey = prop[0];
        let currentValue = prop[1];
        
        console.log(`${currentKey}: ${currentValue}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');