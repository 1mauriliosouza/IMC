// Capturar evento de submit do form

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResult('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    console.log(imc);
    console.log(nivelImc);

    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResult (msg, true);

});

// Calcular IMC

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Definir o nível de IMC

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
        'Obesidade 1', 'Obesidade 2', 'Obesidade 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

// Criar paragrafo no HTML

function pCreate () {
    const p = document.createElement('p');
    return p;
}

// Mostrar resultado no HTML

function setResult (msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = pCreate();

    if (isValid) {
        p.classList.add('p-result-success');
    } else {
        p.classList.add('p-result-error');
    }

    p.innerHTML = msg;
    result.appendChild(p)
};