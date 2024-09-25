function calculateSqrt() {
    const numberInput = document.getElementById('numberInput').value;
    const result = numberInput * numberInput;
    document.getElementById('result').innerHTML = `The square of ${numberInput} is ${result}`;
}

function cancel() {
    document.getElementById('numberInput').value = '';
    document.getElementById('result').innerText = '';
}