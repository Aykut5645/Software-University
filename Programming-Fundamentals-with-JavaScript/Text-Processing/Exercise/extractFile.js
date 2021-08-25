function extractFile(text) {
    let needText = text.split('\\').pop();

    let lastPoint = needText.lastIndexOf('.');
    let fileName = needText.substring(0, lastPoint);
    let extension = needText.substring(lastPoint + 1);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');