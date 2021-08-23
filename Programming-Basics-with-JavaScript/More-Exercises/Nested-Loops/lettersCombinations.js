function solve(input) {
    let startLetter = input[0];
    let endLetter = input[1];
    let thirdLetter = input[2];

    startLetter = startLetter.charCodeAt();
    endLetter = endLetter.charCodeAt();
    thirdLetter = thirdLetter.charCodeAt();
//
   // for (let i = startLetter; i <= endLetter; i++) {
   //     let currentLetter = i;
   //     currentLetter = String.fromCharCode(i);
//
   //     if (currentLetter == thirdLetter) {
   //         continue;
   //     }
//
   //     console.log(currentLetter)
   // }

   let result = "";
   
   let i = 0;
   let j = 0;
   let k = 0;

    for (let i = startLetter; i <= endLetter; i++) {

        for (let j = startLetter; j <= endLetter; j++) {

            for (let k = startLetter; k <= endLetter; k++) {

                startLetter = String.fromCharCode(i);
                endLetter = String.fromCharCode(j);
                thirdLetter = String.fromCharCode(k);

                result = `${startLetter} ${endLetter} ${thirdLetter}`;

                console.log(result);
            }
        }
    }

    

    console.log(result)


}

solve([ 'a', 'c', 'b']);