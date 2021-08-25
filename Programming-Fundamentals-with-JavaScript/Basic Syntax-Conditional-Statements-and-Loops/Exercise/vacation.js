function vacation(input1, input2, input3) {
    let groupCount = input1;
    let groupType = input2;
    let dayType = input3;

    let price = 0;

    if (groupType == 'Students') {

        switch (dayType) {
            case 'Friday':
                price = groupCount * 8.45;
                break;
            case 'Saturday':
                price = groupCount * 9.80;
                break;
            case 'Sunday':
                price = groupCount * 10.46;
                break;
        }
    } else if (groupType == 'Business') {
        switch (dayType) {
            case 'Friday':
                if (groupCount >= 100) {
                    groupCount -= 10;
                }
                price = groupCount * 10.90;
                break;
            case 'Saturday':
                if (groupCount >= 100) {
                    groupCount -= 10;
                }
                price = groupCount * 15.60;
                break;
            case 'Sunday':
                if (groupCount >= 100) {
                    groupCount -= 10;
                }
                price = groupCount * 16;
                break;
        }
    } else if (groupType == 'Regular') {
        switch (dayType) {
            case 'Friday':
                price = groupCount * 15;
                break;
            case 'Saturday':
                price = groupCount * 20;
                break;
            case 'Sunday':
                price = groupCount * 22.50;
                break;
        }
    }

    if (groupType == 'Students' && groupCount >= 30) {
        price *= 0.85;
    } else if (groupType == 'Regular' && (groupCount >= 10 && groupCount <= 20)) {
        price *= 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(
    40,
    "Regular",
    "Saturday"
    );