function cinemaVoucher(input) {
    let index = 0;
    let voucherPrice = Number(input[index]);
    index++;

    let movieOrProduct = input[index];
    index++;

    let movieOrProductLength = movieOrProduct.length;

    let ticket = 0;
    let product = 0;

    while (movieOrProduct != "End") {

        if (movieOrProductLength > 8) {

            let firstLetter = movieOrProduct.charCodeAt(0);
            let secondLetter = movieOrProduct.charCodeAt(1);
            let sumLetter = firstLetter + secondLetter;

            voucherPrice -= sumLetter;

            if (voucherPrice < 0) {
                break;
            }

            ticket++;

        } else if (movieOrProductLength <= 8) {
            
            let firstLetter = movieOrProduct.charCodeAt(0);
            
            voucherPrice -= firstLetter;

            if (voucherPrice < 0) {
                break;
            }

            product++;
        }

        movieOrProduct = input[index];
        index++;

        movieOrProductLength = movieOrProduct.length;
    }

    console.log(ticket);
    console.log(product);
}

cinemaVoucher([
    '1500',
    'Avengers: Endgame',
    'Bohemian Rhapsody',
    'Deadpool 2',
    'End'
  ]);