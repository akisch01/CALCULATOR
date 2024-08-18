function appendCharacter(character) {
    let display = document.getElementById('display');
    display.textContent += character;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        let result = display.textContent
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/Math.pow\(/g, 'Math.pow(')
            .replace(/Math.log\(/g, 'Math.log(')
            .replace(/Math.exp\(/g, 'Math.exp(');
        result = eval(result);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Erreur';
    }
}
