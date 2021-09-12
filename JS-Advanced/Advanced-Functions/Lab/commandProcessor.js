function solution() {
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print,
    }
    
    function append(substr) {
        str = str.concat(substr);
    }

    function removeStart(n) {
        str = str.substring(n);
    }

    function removeEnd(n) {
        str = str.substring(0, str.length - n);
    }

    function print() {
        console.log(str);
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();