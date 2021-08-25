function cutAndReverse(text) {
    let finalArr = [];
    
    let firstText = text.substring(0, text.length / 2);
    let secondText = text.substring(text.length / 2);
    finalArr.push(firstText, secondText);

    finalArr.forEach(element => {
        console.log(element.split('').reverse().join(''));
    });
}

//cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');