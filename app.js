function encryptText() {
    const input = document.getElementById('inputText').value;
    if (!/^[a-z]*$/.test(input)) {
        alert('Por favor, ingrese solo letras minúsculas sin acentos.');
        return;
    }
    let encrypted = input.replace(/e/g, 'enter')
                         .replace(/i/g, 'imes')
                         .replace(/a/g, 'ai')
                         .replace(/o/g, 'ober')
                         .replace(/u/g, 'ufat');
    updateOutput(encrypted);
}

function decryptText() {
    const input = document.getElementById('inputText').value;
    if (!/^[a-z]*$/.test(input)) {
        alert('Por favor, ingrese solo letras minúsculas sin acentos.');
        return;
    }
    let decrypted = input.replace(/enter/g, 'e')
                         .replace(/imes/g, 'i')
                         .replace(/ai/g, 'a')
                         .replace(/ober/g, 'o')
                         .replace(/ufat/g, 'u');
    updateOutput(decrypted);
}

function updateOutput(text) {
    const outputHeader = document.getElementById('outputHeader');
    const outputText = document.getElementById('outputText');
    const copyButton = document.querySelector('.btn-info');

    if (text) {
        outputHeader.innerText = 'Resultado:';
        outputText.innerText = text;
        copyButton.style.display = 'block';
    } else {
        outputHeader.innerText = 'Ningún mensaje fue encontrado';
        outputText.innerText = 'Ingresa el texto que desees encriptar o desencriptar.';
        copyButton.style.display = 'none';
    }
}

function copyText() {
    const output = document.getElementById('outputText');
    const textarea = document.createElement('textarea');
    textarea.value = output.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Texto copiado al portapapeles');
}