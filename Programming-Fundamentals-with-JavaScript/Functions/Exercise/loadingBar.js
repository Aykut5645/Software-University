function loadingBar(num) {
    if (num == 100) {
        console.log(`${num}% Complete!`);
        console.log(percentLoad(num));
    } else {
        console.log(percentLoad(num));
        console.log('Still loading...');
    }

    function percentLoad(num) {
    
        switch (num) {
            case 0:
                return `${num}% [..........]`;
            case 10:
                return `${num}% [%.........]`; 
            case 20:
                return `${num}% [%%........]`;
            case 30:
                return `${num}% [%%%.......]`;
            case 40:
                return `${num}% [%%%%......]`;
            case 50:
                return `${num}% [%%%%%.....]`;
            case 60:
                return `${num}% [%%%%%%....]`;
            case 70:
                return `${num}% [%%%%%%%...]`;
            case 80:
                return `${num}% [%%%%%%%%..]`;
            case 90:
                return `${num}% [%%%%%%%%%.]`;
            case 100:
                return '[%%%%%%%%%%]';
        }
    
    }
}

loadingBar(100);




