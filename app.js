const diccionarioEncriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar() {
    palabra = document.getElementById('in').value
    let palabraEncriptada = '';
    for (let letra of palabra) {
        palabraEncriptada += diccionarioEncriptacion[letra] || letra;
    }
    document.getElementById('t1').textContent = ''
    document.getElementById('t2').textContent = ''
    document.getElementById('out').style.background = "transparent";
    document.getElementById('copiar').style.display = "block";
    res = document.getElementById('res')
    res.innerHTML = palabraEncriptada
    return;
}

function desencriptar() {
    // Obtener la palabra encriptada del elemento 'res'
    const palabraEncriptada = document.getElementById('res').innerHTML;

    // Invertir el diccionario de encriptación para desencriptar
    const diccionarioDesencriptacion = {};
    for (let letra in diccionarioEncriptacion) {
        diccionarioDesencriptacion[diccionarioEncriptacion[letra]] = letra;
    }

    let palabraOriginal = '';
    let palabraEncriptadaSeparada = palabraEncriptada.split('');
    for (let palabra of palabraEncriptadaSeparada) {
        palabraOriginal += diccionarioDesencriptacion[palabra] || palabra;
    }

    document.getElementById('res').textContent = palabraOriginal;

    return;
}

function copiar() {
    const resultado = document.getElementById('res');
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = resultado.textContent;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('¡Texto copiado!');
}

