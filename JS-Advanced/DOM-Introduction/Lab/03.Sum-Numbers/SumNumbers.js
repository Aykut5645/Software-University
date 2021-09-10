function calc() {
    let firstNumEl = document.getElementById('num1');
    let secondNumEl = document.getElementById('num2');
    let resultEl = document.getElementById('sum');

    resultEl.value = eval(`${firstNumEl.value} + ${secondNumEl.value}`);
}
